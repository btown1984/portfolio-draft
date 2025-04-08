import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';
import { toggleFullscreen } from '../utils/fullscreen';
import tokens from '../styles/tokens';

// Import slides
import Slide1 from '../slides/Slide1';
import Slide2 from '../slides/Slide2';
import Slide3 from '../slides/Slide3';

// Styled components
const PresentationContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.dark};
`;

const SlideWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationDots = styled.div`
  position: fixed;
  bottom: ${tokens.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${tokens.spacing[2]};
  z-index: 100;
`;

const NavDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$active ? tokens.colors.accent.primary : tokens.colors.neutrals.mediumGray};
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: ${props => props.$active ? 1 : 0.5};
  transition: all ${tokens.animation.duration.fast} ${tokens.animation.easing.easeInOut};
  
  &:hover {
    opacity: 1;
  }
`;

const FullscreenButton = styled.button`
  position: fixed;
  bottom: ${tokens.spacing[4]};
  right: ${tokens.spacing[4]};
  width: 40px;
  height: 40px;
  border-radius: ${tokens.borders.radius.md};
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: ${tokens.colors.neutrals.white};
  font-size: ${tokens.typography.fontSize.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  transition: all ${tokens.animation.duration.fast} ${tokens.animation.easing.easeInOut};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// Slide transition variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'tween', duration: 0.85, ease: [0.16, 1, 0.05, 1] },
      opacity: { duration: 0.7, ease: 'easeOut' }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'tween', duration: 0.85, ease: [0.16, 1, 0.05, 1] },
      opacity: { duration: 0.6, ease: 'easeOut' }
    }
  })
};

/**
 * The main presentation controller component
 * Handles slide navigation and content management
 */
const PresentationController = () => {
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  // State for slide transition direction
  const [direction, setDirection] = useState(0);
  // State for draggable content management
  const [contentState, setContentState] = useState({});
  // State for fullscreen mode
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Array of slide components
  const slides = [
    Slide1,
    Slide2,
    Slide3
  ];
  
  // Handle navigation to next slide
  const goToNextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prevSlide => prevSlide + 1);
    }
  }, [currentSlide, slides.length]);
  
  // Handle navigation to previous slide
  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prevSlide => prevSlide - 1);
    }
  }, [currentSlide]);
  
  // Handle fullscreen toggle
  const handleToggleFullscreen = useCallback(async () => {
    const result = await toggleFullscreen();
    setIsFullscreen(result);
  }, []);
  
  // Use keyboard navigation hook
  useKeyboardNavigation(goToNextSlide, goToPrevSlide, handleToggleFullscreen);
  
  // Handle navigation to specific slide
  const navigateToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  
  // Handle content drop for drag and drop functionality
  const handleContentDrop = (sourceId, targetId) => {
    // In a real implementation, this would handle the actual content transfer
    // For now, we just log the action
    console.log(`Content dropped from ${sourceId} to ${targetId}`);
    setContentState(prevState => ({
      ...prevState,
      [targetId]: `Content from ${sourceId}`
    }));
  };
  
  // Get the current slide component
  const CurrentSlide = slides[currentSlide];

  return (
    <PresentationContainer>
      <AnimatePresence custom={direction} initial={false}>
        <SlideWrapper
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'tween', duration: 0.85, ease: [0.16, 1, 0.05, 1] }}
        >
          <CurrentSlide 
            onNavigate={navigateToSlide} 
            onContentDrop={handleContentDrop}
            contentState={contentState}
          />
        </SlideWrapper>
      </AnimatePresence>
      
      {/* Navigation dots */}
      <NavigationDots>
        {slides.map((_, index) => (
          <NavDot 
            key={index} 
            $active={index === currentSlide} 
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </NavigationDots>
      
      {/* Fullscreen button */}
      <FullscreenButton onClick={handleToggleFullscreen}>
        {isFullscreen ? '⤓' : '⤢'}
      </FullscreenButton>
    </PresentationContainer>
  );
};

export default PresentationController;