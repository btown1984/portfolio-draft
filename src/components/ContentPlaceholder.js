import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../styles/tokens';
import { saveFile, getStoredFileInfo, storeFileInfo, isVideo, isImage } from '../utils/fileUpload';

// Styled components for the content placeholder
const Placeholder = styled(motion.div)`
  background-color: ${props => props.$backgroundColor || tokens.colors.backgrounds.offWhite};
  border-radius: ${props => props.$borderRadius || '0'};
  border: ${props => props.$hasContent ? 'none' : `${tokens.borders.width.thin} dashed ${tokens.colors.neutrals.mediumGray}`};
  padding: ${props => props.$padding || tokens.spacing[5]};
  margin: ${props => props.$margin || '0'};
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || 'auto'};
  min-height: ${props => props.$minHeight || '150px'};
  cursor: ${props => (props.$isDraggable ? 'grab' : props.$isDropZone ? 'copy' : 'default')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all ${tokens.animation.duration.fast} ${tokens.animation.easing.easeOut};
  
  ${props => props.$isTitleSlideImage && `
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 1;
    object-fit: cover;
    z-index: 2;
    &:hover {
      border-color: transparent;
      box-shadow: none;
    }
    &.drag-over {
      border: 2px dashed ${tokens.colors.accent.primary};
      background-color: rgba(255, 51, 102, 0.05);
    }
  `}
  
  &:hover {
    border-color: ${props => (props.$isDraggable || props.$isDropZone) ? tokens.colors.accent.primary : tokens.colors.neutrals.mediumGray};
    box-shadow: ${props => (props.$isDraggable || props.$isDropZone) ? tokens.shadows.sm : 'none'};
  }
  
  &.drag-over {
    border: 2px dashed ${tokens.colors.accent.primary};
    background-color: rgba(255, 51, 102, 0.05);
  }
  
  &:active {
    cursor: ${props => (props.$isDraggable ? 'grabbing' : props.$isDropZone ? 'copy' : 'default')};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const PlaceholderText = styled.p`
  color: ${tokens.colors.neutrals.gray};
  font-size: ${tokens.typography.fontSize.sm};
  text-align: center;
  margin: ${tokens.spacing[2]} 0;
`;

const PlaceholderIcon = styled.div`
  font-size: ${tokens.typography.fontSize['3xl']};
  color: ${tokens.colors.neutrals.mediumGray};
  margin-bottom: ${tokens.spacing[2]};
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => `translate(${props.$translateX || 0}px, ${props.$translateY || 0}px)`};
  transition: transform 0.1s linear;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

/**
 * Content Placeholder component that can accept drag and drop content
 * 
 * @param {Object} props - Component props
 * @param {String} props.id - Unique identifier for the placeholder
 * @param {Node} props.children - Content to display inside the placeholder
 * @param {String} props.placeholderText - Text to display when empty
 * @param {Boolean} props.isDraggable - Whether the content can be dragged
 * @param {Boolean} props.isDropZone - Whether the component can accept dropped content
 * @param {Function} props.onDrop - Function to call when content is dropped
 * @param {Object} props.style - Additional styling
 * @param {String} props.savedMediaPath - Path to a previously saved media file
 * @param {Boolean} props.$isTitleSlideImage - Whether the placeholder is a title slide image
 * @param {Object} props.imagePosition - Image position for StyledImage and StyledVideo
 */
const ContentPlaceholder = ({
  id,
  children,
  placeholderText = 'Drag media here',
  isDraggable = false,
  isDropZone = true,
  onDrop: parentOnDrop,
  savedMediaPath: initialMediaPath,
  $isTitleSlideImage = false,
  imagePosition,
  ...props
}) => {
  const placeholderRef = useRef(null);
  const [mediaPath, setMediaPath] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialPath = initialMediaPath || getStoredFileInfo(id);
    if (initialPath) {
      console.log(`[${id}] Loading initial media path:`, initialPath);
      setMediaPath(initialPath);
      if (initialPath.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        setMediaType('image');
      } else if (initialPath.match(/\.(mp4|webm|ogg)$/i)) {
        setMediaType('video');
      }
    }
  }, [id, initialMediaPath]);

  const handleFileUpload = useCallback(async (file) => {
    setError(null);
    if (!file) return;

    const fileIsImage = isImage(file.type);
    const fileIsVideo = isVideo(file.type);

    if (!fileIsImage && !fileIsVideo) {
      setError('Invalid file type. Please upload an image or video.');
      return;
    }
    
    console.log(`[${id}] Uploading file:`, file.name);
    const { filePath, error: uploadError } = await saveFile(file);

    if (uploadError || !filePath) {
      setError(uploadError || 'Failed to upload file.');
      setMediaPath(null);
      setMediaType(null);
      storeFileInfo(id, null);
    } else {
      console.log(`[${id}] Upload successful, path:`, filePath);
      setMediaPath(filePath);
      setMediaType(fileIsImage ? 'image' : 'video');
      storeFileInfo(id, filePath);
      setError(null);
      
      if (parentOnDrop) {
        parentOnDrop(id, filePath, fileIsImage ? 'image' : 'video');
      }
    }
  }, [id, parentOnDrop]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    setError(null);
    console.log(`[${id}] Drop event detected`);

    if (!isDropZone) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      console.log(`[${id}] File dropped:`, file.name);
      handleFileUpload(file);
      e.dataTransfer.clearData();
    }
  }, [isDropZone, handleFileUpload, id]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDropZone) {
      console.log(`[${id}] Drag Enter`);
      setIsDraggingOver(true);
    }
  }, [isDropZone, id]);
    
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDropZone) {
      e.dataTransfer.dropEffect = 'copy';
    }
  }, [isDropZone, id]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDropZone && placeholderRef.current && !placeholderRef.current.contains(e.relatedTarget)) {
      console.log(`[${id}] Drag Leave`);
      setIsDraggingOver(false);
    }
  }, [isDropZone, id]);
  
  const hasContent = !!mediaPath;

  const styledProps = {
    $isDraggable: isDraggable,
    $isDropZone: isDropZone,
    $isDraggingOver: isDraggingOver,
    $hasContent: hasContent,
    $isTitleSlideImage: $isTitleSlideImage,
  };

  const renderContent = () => {
    if (mediaPath) {
      const mediaElement = mediaType === 'image' ? (
        <StyledImage 
          src={mediaPath} 
          alt="Uploaded content" 
        />
      ) : mediaType === 'video' ? (
        <StyledVideo 
          src={mediaPath} 
          autoPlay 
          muted 
          loop 
          playsInline 
        />
      ) : null;

      return (
        <MediaWrapper
          $translateX={imagePosition?.x}
          $translateY={imagePosition?.y}
        >
          {mediaElement}
        </MediaWrapper>
      );

    } else if (children) {
      return children;
    } else {
      return <PlaceholderText>{error ? <ErrorMessage>{error}</ErrorMessage> : placeholderText}</PlaceholderText>;
    }
  };
  
  return (
    <Placeholder
      ref={placeholderRef}
      {...styledProps}
      className={`content-placeholder ${isDraggingOver ? 'drag-over' : ''}`}
      draggable={isDraggable}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      {...props}
    >
      <ContentWrapper>
        {renderContent()}
      </ContentWrapper>
    </Placeholder>
  );
};

export default ContentPlaceholder;