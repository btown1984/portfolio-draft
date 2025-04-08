/**
 * Utility functions for handling file uploads
 */

// Valid image file types for better type checking
const IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml'
];

// Valid video file types for better type checking
const VIDEO_TYPES = [
  'video/mp4',
  'video/webm',
  'video/ogg'
];

/**
 * Save a file and return its persistent path and temporary URL.
 * Stores mapping in localStorage.
 *
 * @param {File} file - The file object to save
 * @returns {Promise<{filePath: string, objectUrl: string}>} - Promise resolving to the file path and its object URL
 */
export const saveFile = async (file) => {
  try {
    console.log('Saving file:', file.name, file.type);
    const timestamp = new Date().getTime();
    const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    // This is the persistent identifier we'll use
    const filePath = `/uploads/${fileName}`;

    // Create a temporary URL for immediate display
    const objectUrl = URL.createObjectURL(file);
    console.log('Created object URL:', objectUrl);

    // Store mapping: filePath -> { name, type, size, objectUrl }
    try {
      const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '{}');
      savedFiles[filePath] = {
        name: file.name,
        type: file.type,
        size: file.size,
        objectUrl: objectUrl, // Store the temporary URL
        timestamp: timestamp
      };
      localStorage.setItem('uploadedFiles', JSON.stringify(savedFiles));
      console.log('File info saved in localStorage with path:', filePath);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      // Don't revoke if localStorage fails, maybe still usable in session
    }

    // Return both the persistent path and the temporary URL
    return { filePath, objectUrl };
  } catch (error) {
    console.error('Error saving file:', error);
    throw error;
  }
};

/**
 * Get information about a previously uploaded file using its persistent path.
 *
 * @param {string} filePath - The persistent path (e.g., /uploads/...)
 * @returns {Object|null} - File information or null if not found
 */
export const getFileInfo = (filePath) => {
  try {
    const savedFiles = JSON.parse(localStorage.getItem('uploadedFiles') || '{}');
    const fileInfo = savedFiles[filePath] || null;
    // console.log('Retrieved file info for path:', filePath, fileInfo);
    return fileInfo;
  } catch (error) {
    console.error('Error retrieving file info:', error);
    return null;
  }
};

/**
 * Get the temporary Object URL for a file using its persistent path.
 * Needed for rendering the media after retrieving the path.
 *
 * @param {string} filePath - The persistent path (e.g., /uploads/...)
 * @returns {string|null} - The Object URL or null if not found
 */
export const getFileUrl = (filePath) => {
  const fileInfo = getFileInfo(filePath);
  return fileInfo ? fileInfo.objectUrl : null;
};

/**
 * Determine if a file is a video based on its MIME type
 *
 * @param {File|string} file - The file object or MIME type string
 * @returns {boolean} - Whether the file is a video
 */
export const isVideo = (file) => {
  const mimeType = typeof file === 'string' ? file : file.type;
  return mimeType.startsWith('video/');
};

/**
 * Determine if a file is an image based on its MIME type
 *
 * @param {File|string} file - The file object or MIME type string
 * @returns {boolean} - Whether the file is an image
 */
export const isImage = (file) => {
  const mimeType = typeof file === 'string' ? file : file.type;
  return mimeType.startsWith('image/');
}; 