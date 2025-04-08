import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../styles/tokens';
import ContentPlaceholder from '../components/ContentPlaceholder';
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

// Renamed GradientBackground to MediaOverlayGradient for clarity
const MediaOverlayGradient = styled(motion.div)` 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${tokens.effects.gradients.titleSlideAccent}; // Kept original gradient for overlay
  mix-blend-mode: ${tokens.effects.blendModes.multiply};
  z-index: 1; // Should be above the ContentPlaceholder image
  opacity: ${props => props.$hasMedia ? 0.8 : 1};
  pointer-events: none; // Ensure it doesn't interfere with drops
`;

/**
 * Title Slide
 * 
 * Layout: Asymmetrical grid with title dominating 2/3 of slide
 * Typography: XXXL modern serif for "SCALING CREATIVITY"
 * Visual: Minimalist background with subtle animated gradient
 * Interactive: Title text enters with kinetic typography animation
 * Design Notes: High contrast, breathing space around type, golden ratio composition
 */
const Title = ({ onContentDrop }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const authorRef = useRef(null);
  // State to track if the placeholder has media, mainly for the gradient overlay
  const [hasMedia, setHasMedia] = useState(false); 
  const [currentMediaPath, setCurrentMediaPath] = useState(null);

  // Load initial media state from localStorage (only the path)
  useEffect(() => {
    const savedPath = localStorage.getItem('media-title-image'); // Use the ContentPlaceholder's ID
    if (savedPath) {
        console.log('Title initial load, found path:', savedPath);
        setHasMedia(true);
        setCurrentMediaPath(savedPath);
    } else {
        setHasMedia(false);
        setCurrentMediaPath(null);
    }
  }, []);

  // Updated handler for when ContentPlaceholder successfully drops/loads media
  const handleMediaUpdate = (id, filePath, fileType) => {
    console.log('Title received media update:', { id, filePath, fileType });
    if (id === 'title-image') { 
      if (filePath) {
        setHasMedia(true);
        setCurrentMediaPath(filePath);
      } else { // Handle potential clearing of media
        setHasMedia(false);
        setCurrentMediaPath(null);
      }
      // Propagate if necessary (though PresentationController doesn't use it currently)
      if (onContentDrop) {
        onContentDrop(id, filePath, fileType);
      }
    }
  };

  // Log state changes for debugging
  useEffect(() => {
    console.log('Title state:', { hasMedia, currentMediaPath });
  }, [hasMedia, currentMediaPath]);

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
          id="title-image" // Critical ID for localStorage
          placeholderText="Drag image or video here"
          isDropZone={true}
          onDrop={handleMediaUpdate} // Use the updated handler
          savedMediaPath={currentMediaPath} // Pass the potentially pre-loaded path
          $isTitleSlideImage={true}
        />
        {/* The gradient overlay should probably be conditional on hasMedia */}
        <MediaOverlayGradient 
          $hasMedia={hasMedia}
          initial={{ opacity: hasMedia ? 0.8 : 1 }} // Set initial based on loaded state
          animate={{ opacity: hasMedia ? 0.8 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </ImageArea>
    </SlideContainer>
  );
};

export default Title; 