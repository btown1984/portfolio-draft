import { useEffect, useCallback } from 'react';

/**
 * Custom hook for keyboard navigation in presentations
 * 
 * @param {Function} goToNextSlide - Function to navigate to next slide
 * @param {Function} goToPrevSlide - Function to navigate to previous slide
 * @param {Function} toggleFullscreen - Function to toggle fullscreen mode
 */
const useKeyboardNavigation = (goToNextSlide, goToPrevSlide, toggleFullscreen) => {
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case 'Enter':
        goToNextSlide();
        break;
      case 'ArrowLeft':
      case 'Backspace':
        goToPrevSlide();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'Escape':
        // If in fullscreen, exit fullscreen
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {
            console.error(`Error exiting fullscreen: ${err.message}`);
          });
        }
        break;
      default:
        break;
    }
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyboardNavigation;