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
      case 'F':
      case 'f':
        // Only toggle fullscreen if Shift key is also pressed
        if (e.shiftKey) {
          e.preventDefault(); // Prevent browser's find dialog
          toggleFullscreen();
        }
        break;
      case 'Escape':
        // Exit fullscreen mode
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