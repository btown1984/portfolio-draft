import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation';
import { toggleFullscreen } from '../utils/fullscreen';
import tokens from '../styles/tokens';

// Import slides
import Title from '../slides/Title';
import Agenda from '../slides/Agenda';
import About1 from '../slides/About1';
import CaseStudy1 from '../slides/CaseStudy1';
import CaseStudy1Challenge from '../slides/CaseStudy1Challenge';
import CaseStudy1Complexities from '../slides/CaseStudy1Complexities';
import CaseStudy1Collaboration from '../slides/CaseStudy1Collaboration';
import CaseStudy1Process from '../slides/CaseStudy1Process';
import CaseStudy1Scaling from '../slides/CaseStudy1Scaling';
import CaseStudy1Automation from '../slides/CaseStudy1Automation';
import CaseStudy1Evolution from '../slides/CaseStudy1Evolution';
import CaseStudy1Impact from '../slides/CaseStudy1Impact';
import CaseStudy1Summary from '../slides/CaseStudy1Summary';
import CaseStudy2 from '../slides/CaseStudy2';
import CaseStudy2Spark from '../slides/CaseStudy2Spark';
import CaseStudy2Demand from '../slides/CaseStudy2Demand';
import CaseStudy2Team from '../slides/CaseStudy2Team';
import CaseStudy2Infrastructure from '../slides/CaseStudy2Infrastructure';
import CaseStudy2Speed from '../slides/CaseStudy2Speed';
import CaseStudy2Hybrid from '../slides/CaseStudy2Hybrid';
import CaseStudy2Launch from '../slides/CaseStudy2Launch';
import CaseStudy2Process from '../slides/CaseStudy2Process';
import CaseStudy2Reflections from '../slides/CaseStudy2Reflections';
import CaseStudy3 from '../slides/CaseStudy3';

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
      x: { type: 'tween', duration: 0.6, ease: [0.16, 1, 0.05, 1] },
      opacity: { duration: 0.6, ease: 'easeOut' }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: 'tween', duration: 0.6, ease: [0.16, 1, 0.05, 1] },
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
    Title,
    Agenda,
    About1,
    CaseStudy1,
    CaseStudy1Challenge,
    CaseStudy1Complexities,
    CaseStudy1Collaboration,
    CaseStudy1Process,
    CaseStudy1Scaling,
    CaseStudy1Automation,
    CaseStudy1Evolution,
    CaseStudy1Impact,
    CaseStudy1Summary,
    CaseStudy2,
    CaseStudy2Spark,
    CaseStudy2Demand,
    CaseStudy2Team,
    CaseStudy2Infrastructure,
    CaseStudy2Speed,
    CaseStudy2Hybrid,
    CaseStudy2Launch,
    CaseStudy2Process,
    CaseStudy2Reflections,
    CaseStudy3
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
      <AnimatePresence custom={direction} initial={false} mode="sync">
        <SlideWrapper
          key={`slide-${currentSlide}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
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