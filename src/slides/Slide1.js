import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../styles/tokens';
import ContentPlaceholder from '../components/ContentPlaceholder';
import { getFileInfo } from '../utils/fileUpload';
import { EditorialSubtitle, EditorialTitle, AuthorRole } from '../components/Typography';

// Styled components for the slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.white};
  overflow: hidden;
  display: grid;
  grid-template-columns: ${tokens.layout.grid.titleSlide};
  grid-template-rows: 100%;
`;

const SlideBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${tokens.colors.gradients.darkBackground};
  z-index: 0;
`;

const TitleArea = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: ${tokens.layout.padding.titleSlide};
`;

const ImageArea = styled.div`
  grid-row: 1;
  position: relative;
  overflow: hidden;
`;

const AuthorInfo = styled.div`
  margin-top: ${tokens.spacing.editorial.titleSlide.authorInfoTop};
`;

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${tokens.effects.gradients.titleSlideAccent};
  mix-blend-mode: ${tokens.effects.blendModes.multiply};
  z-index: 1;
  opacity: ${props => props.$hasMedia ? 0.8 : 1};
`;

/**
 * Slide 1: Title Slide
 * 
 * Layout: Asymmetrical grid with title dominating 2/3 of slide
 * Typography: XXXL modern serif for "SCALING CREATIVITY"
 * Visual: Minimalist background with subtle animated gradient
 * Interactive: Title text enters with kinetic typography animation
 * Design Notes: High contrast, breathing space around type, golden ratio composition
 */
const Slide1 = ({ onContentDrop }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const authorRef = useRef(null);
  const [titleImage, setTitleImage] = useState(null);
  const [hasMedia, setHasMedia] = useState(false);
  
  // Load any previously saved media path from localStorage
  useEffect(() => {
    const savedMedia = localStorage.getItem('slide1-title-image');
    console.log('Loading saved media path:', savedMedia);
    if (savedMedia) {
      setTitleImage(savedMedia);
      setHasMedia(true);
      
      // Get and display the file info to debug
      const fileInfo = getFileInfo(savedMedia);
      console.log('Media file info:', fileInfo);
    }
  }, []);
  
  // Handle media drop for this specific slide
  const handleMediaDrop = (id, filePath, fileType) => {
    console.log('Media dropped in slide:', id, filePath, fileType);
    
    // Save the media path in localStorage for persistence
    localStorage.setItem('slide1-title-image', filePath);
    setTitleImage(filePath);
    setHasMedia(true);
    
    // If parent component provided an onContentDrop callback, call it
    if (onContentDrop) {
      onContentDrop(id, filePath, fileType);
    }
  };

  // Log state changes for debugging
  useEffect(() => {
    console.log('Slide1 state:', { titleImage, hasMedia });
  }, [titleImage, hasMedia]);

  return (
    <SlideContainer>
      <SlideBackground />
      <TitleArea>
        <EditorialSubtitle ref={subtitleRef}>PORTFOLIO REVIEW</EditorialSubtitle>
        <EditorialTitle ref={titleRef}>BRIAN TOWNSEND</EditorialTitle>
        <AuthorInfo ref={authorRef}>
          <AuthorRole>AI Creative Leader | Product Storyteller | CG Artist | Principal Design Manager</AuthorRole>
        </AuthorInfo>
      </TitleArea>
      
      <ImageArea>
        <ContentPlaceholder 
          id="title-image"
          placeholderText="Drag image or video here"
          isDropZone={true}
          onDrop={handleMediaDrop}
          savedMediaPath={titleImage}
          $isTitleSlideImage={true}
        />
        <GradientBackground 
          $hasMedia={hasMedia}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasMedia ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageArea>
    </SlideContainer>
  );
};

export default Slide1;