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

// Slide transition variants - simplified to quick fades with no horizontal movement
const slideVariants = {
  enter: () => ({
    opacity: 0,
  }),
  center: {
    opacity: 1,
    transition: {
      duration: 0.3, // Much faster transition
      ease: 'easeOut'
    }
  },
  exit: () => ({
    opacity: 0,
    transition: {
      duration: 0.2, // Even faster exit
      ease: 'easeIn'
    }
  })
};

/**
 * The main presentation controller component
 * Handles slide navigation and content management
 * 
 * Note: Fullscreen mode is toggled with Shift+F keyboard shortcut
 * ESC key exits fullscreen mode
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
  // NEW: Animation coordination state - indicates when slide transition is complete
  const [slideAnimationState, setSlideAnimationState] = useState('idle');
  
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
    if (currentSlide < slides.length - 1 && slideAnimationState === 'idle') {
      setSlideAnimationState('transitioning');
      setDirection(1);
      setCurrentSlide(prevSlide => prevSlide + 1);
    }
  }, [currentSlide, slides.length, slideAnimationState]);
  
  // Handle navigation to previous slide
  const goToPrevSlide = useCallback(() => {
    if (currentSlide > 0 && slideAnimationState === 'idle') {
      setSlideAnimationState('transitioning');
      setDirection(-1);
      setCurrentSlide(prevSlide => prevSlide - 1);
    }
  }, [currentSlide, slideAnimationState]);
  
  // Handle fullscreen toggle
  const handleToggleFullscreen = useCallback(async () => {
    const result = await toggleFullscreen();
    setIsFullscreen(result);
  }, []);
  
  // Use keyboard navigation hook
  useKeyboardNavigation(goToNextSlide, goToPrevSlide, handleToggleFullscreen);
  
  // Handle navigation to specific slide
  const navigateToSlide = (index) => {
    if (slideAnimationState === 'idle') {
      setSlideAnimationState('transitioning');
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    }
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
  
  // Handle animation complete - no artificial delay
  const handleAnimationComplete = (definition) => {
    if (definition === 'center') {
      // Slide has reached center position - transition complete
      // Set to idle immediately with no delay
      setSlideAnimationState('idle');
    }
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
          onAnimationComplete={handleAnimationComplete}
        >
          <CurrentSlide 
            onNavigate={navigateToSlide} 
            onContentDrop={handleContentDrop}
            contentState={contentState}
            animationState={slideAnimationState} // Pass animation state to slides
          />
        </SlideWrapper>
      </AnimatePresence>
    </PresentationContainer>
  );
};

export default PresentationController;