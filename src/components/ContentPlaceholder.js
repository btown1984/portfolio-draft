import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../styles/tokens';
import { saveFile, getFileInfo, getFileUrl, isVideo, isImage } from '../utils/fileUpload';

// Styled components for the content placeholder
const Placeholder = styled(motion.div)`
  background-color: ${props => props.$backgroundColor || tokens.colors.backgrounds.offWhite};
  border-radius: ${tokens.borders.radius.default};
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
  ...props
}) => {
  const [mediaPath, setMediaPath] = useState(initialMediaPath || null);
  const [displayUrl, setDisplayUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [dropError, setDropError] = useState(null);
  const placeholderRef = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const path = mediaPath || localStorage.getItem(`media-${id}`);
    if (path) {
      console.log(`[${id}] Attempting to load media info for path:`, path);
      const fileInfo = getFileInfo(path);
      if (fileInfo) {
        console.log(`[${id}] Found file info:`, fileInfo);
        setMediaPath(path);
        setDisplayUrl(fileInfo.objectUrl);
        if (isVideo(fileInfo.type)) {
          setMediaType('video');
        } else if (isImage(fileInfo.type)) {
          setMediaType('image');
        }
      } else {
        console.warn(`[${id}] No file info found in localStorage for path:`, path);
        setMediaPath(null);
        setDisplayUrl(null);
        setMediaType(null);
        localStorage.removeItem(`media-${id}`);
      }
    } else {
        setMediaPath(null);
        setDisplayUrl(null);
        setMediaType(null);
    }
  }, [id, initialMediaPath]);
  
  const handleFileUpload = useCallback(async (file) => {
    setDropError(null);
    if (!isDropZone) return;

    try {
      console.log(`[${id}] Handling file upload:`, file.name, file.type);
      if (isImage(file) || isVideo(file)) {
        const { filePath, objectUrl } = await saveFile(file);
        console.log(`[${id}] File saved. Path: ${filePath}, URL: ${objectUrl}`);
        setMediaPath(filePath);
        setDisplayUrl(objectUrl);
        setMediaType(isVideo(file) ? 'video' : 'image');
        localStorage.setItem(`media-${id}`, filePath);
        console.log(`[${id}] Saved persistent path ${filePath} to localStorage.`);
        if (parentOnDrop) {
          parentOnDrop(id, filePath, file.type);
        }
      } else {
        console.warn(`[${id}] Unsupported file type: ${file.type}`);
        setDropError('Unsupported file type. Please upload an image or video.');
      }
    } catch (error) {
      console.error(`[${id}] Error uploading file:`, error);
      setDropError(`Error uploading file: ${error.message}`);
    }
  }, [id, isDropZone, parentOnDrop]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDropZone) return;
    console.log(`[${id}] handleDragEnter FIRED`);
    setIsDraggingOver(true);
  }, [id, isDropZone]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDropZone) return;
    e.dataTransfer.dropEffect = 'copy';
  }, [isDropZone]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDropZone) return;
    if (placeholderRef.current && !placeholderRef.current.contains(e.relatedTarget)) {
        console.log(`[${id}] handleDragLeave FIRED`);
        setIsDraggingOver(false);
    }
  }, [id, isDropZone]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`[${id}] handleDrop FIRED on Placeholder`);

    if (!isDropZone) {
        console.log(`[${id}] Drop zone disabled, ignoring drop.`);
        return;
    }

    setIsDraggingOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      console.log(`[${id}] File detected in drop:`, file.name);
      handleFileUpload(file);
    } else {
      console.log(`[${id}] Drop event without files.`);
      const sourceId = e.dataTransfer.getData('text/plain');
      if (parentOnDrop && sourceId && sourceId !== id) {
          console.log(`[${id}] Handling internal drop from ${sourceId}`);
          parentOnDrop(sourceId, id);
      } else if (sourceId) {
          console.warn(`[${id}] Invalid internal drop from ${sourceId}`);
          setDropError('Invalid drop operation');
      } else {
          console.warn(`[${id}] Drop event with no files or data.`);
          setDropError('No file detected in drop.');
      }
    }
  }, [id, isDropZone, handleFileUpload, parentOnDrop]);
  
  const hasContent = !!(children || displayUrl);
  const styledProps = {
    $isDraggable: isDraggable,
    $isDropZone: isDropZone,
    $isDraggingOver: isDraggingOver,
    $hasContent: hasContent,
    $isTitleSlideImage: $isTitleSlideImage,
  };
  
  const renderContent = () => {
    if (children) return children;

    if (displayUrl) {
      return (
        <MediaContainer>
          {mediaType === 'video' ? (
            <StyledVideo
              ref={videoRef}
              key={displayUrl}
              src={displayUrl}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          ) : (
            <StyledImage
              key={displayUrl}
              src={displayUrl}
              alt="Uploaded content" />
          )}
        </MediaContainer>
      );
    }

    return (
      <>
        <PlaceholderIcon>+</PlaceholderIcon>
        <PlaceholderText>{placeholderText}</PlaceholderText>
        {dropError && <PlaceholderText style={{ color: 'red', marginTop: tokens.spacing[2] }}>{dropError}</PlaceholderText>}
      </>
    );
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
      animate={{
        borderColor: isDraggingOver ? tokens.colors.accent.primary : (hasContent ? 'transparent' : tokens.colors.neutrals.mediumGray),
        backgroundColor: isDraggingOver ? 'rgba(255, 51, 102, 0.05)' : (styledProps.$backgroundColor || tokens.colors.backgrounds.offWhite),
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      {...props}
    >
      <ContentWrapper>
        {renderContent()}
      </ContentWrapper>
    </Placeholder>
  );
};

export default ContentPlaceholder;