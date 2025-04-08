/**
 * Toggle fullscreen mode for the specified element
 * 
 * @param {HTMLElement} element - The element to toggle fullscreen on (defaults to document.documentElement)
 * @returns {Promise} - Promise that resolves when the fullscreen action is complete
 */
export const toggleFullscreen = async (element = document.documentElement) => {
  try {
    if (!document.fullscreenElement) {
      // Enter fullscreen mode
      await element.requestFullscreen();
      return true;
    } else {
      // Exit fullscreen mode
      await document.exitFullscreen();
      return false;
    }
  } catch (error) {
    console.error('Error toggling fullscreen:', error);
    return false;
  }
};

/**
 * Check if browser is currently in fullscreen mode
 * 
 * @returns {Boolean} - Whether the browser is in fullscreen mode
 */
export const isFullscreen = () => {
  return !!document.fullscreenElement;
};

/**
 * Add event listener for fullscreen change
 * 
 * @param {Function} callback - Function to call when fullscreen state changes
 * @returns {Function} - Function to remove the event listener
 */
export const onFullscreenChange = (callback) => {
  document.addEventListener('fullscreenchange', callback);
  
  return () => {
    document.removeEventListener('fullscreenchange', callback);
  };
};