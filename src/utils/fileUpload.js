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
 * Uploads a file to the server API endpoint.
 * @param {File} file - The file object to upload.
 * @returns {Promise<{filePath: string | null, error: string | null}>} - The persistent file path or an error.
 */
export const saveFile = async (file) => {
  if (!file) {
    return { filePath: null, error: 'No file provided.' };
  }

  const formData = new FormData();
  formData.append('media', file);

  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Upload API Error:', errorData);
      return { filePath: null, error: errorData.error || `Upload failed with status: ${response.status}` };
    }

    const data = await response.json();
    console.log('File uploaded successfully, path:', data.filePath);
    return { filePath: data.filePath, error: null }; // Return the persistent path

  } catch (error) {
    console.error('Error uploading file:', error);
    return { filePath: null, error: 'Failed to upload file.' };
  }
};

/**
 * Retrieves file information stored in localStorage for a given component ID.
 * NOTE: This is now primarily for retrieving the *persistent* path.
 * @param {string} componentId - The ID of the component.
 * @returns {string | null} - The stored file path or null.
 */
export const getStoredFileInfo = (componentId) => {
  try {
    const storedPath = localStorage.getItem(`media-${componentId}`);
    console.log(`Retrieved stored path for ${componentId}:`, storedPath);
    return storedPath;
  } catch (error) {
    console.error('Error retrieving from localStorage:', error);
    return null;
  }
};

/**
 * Stores the persistent file path in localStorage for a given component ID.
 * @param {string} componentId - The ID of the component.
 * @param {string} filePath - The persistent file path to store.
 */
export const storeFileInfo = (componentId, filePath) => {
  try {
    if (filePath) {
      localStorage.setItem(`media-${componentId}`, filePath);
      console.log(`Stored path for ${componentId}:`, filePath);
    } else {
      localStorage.removeItem(`media-${componentId}`);
      console.log(`Removed path for ${componentId}`);
    }
  } catch (error) {
    console.error('Error saving to localStorage:', error);
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