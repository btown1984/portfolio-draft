import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto'; // Import crypto module

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing, formidable handles it
  },
};

// Ensure the uploads directory exists
const uploadsDir = path.join(process.cwd(), 'public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Path for the hash manifest
const manifestPath = path.join(process.cwd(), 'uploads-manifest.json');

// Function to load the manifest
const loadManifest = () => {
  try {
    if (fs.existsSync(manifestPath)) {
      const data = fs.readFileSync(manifestPath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading upload manifest:', error);
  }
  return {}; // Return empty object if file doesn't exist or error occurs
};

// Function to save the manifest
const saveManifest = (manifest) => {
  try {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error saving upload manifest:', error);
  }
};

// Function to calculate file hash
const calculateHash = (filePath) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Use formidable's default temp directory or a specified one
  const form = new IncomingForm({
    keepExtensions: true,
    // Let formidable use its default temporary file handling
    // uploadDir: uploadsDir, // Don't specify final upload dir yet
    // filename: ... // Don't specify final filename yet
  });

  try {
    const [fields, files] = await form.parse(req);
    
    if (!files.media || files.media.length === 0) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const tempFile = files.media[0];
    const tempFilePath = tempFile.filepath;

    // 1. Calculate hash of the uploaded file
    const fileHash = await calculateHash(tempFilePath);

    // 2. Load the manifest
    const manifest = loadManifest();

    // 3. Check if hash exists in manifest
    if (manifest[fileHash]) {
      console.log(`Duplicate file detected. Hash: ${fileHash}, Path: ${manifest[fileHash]}`);
      // 4a. If exists, delete the temporary file
      try {
        await fs.promises.unlink(tempFilePath);
      } catch (unlinkError) {
        console.error(`Error deleting temporary duplicate file ${tempFilePath}:`, unlinkError);
        // Continue, but log the error
      }
      // 4b. Return the existing path
      return res.status(200).json({ filePath: manifest[fileHash] });
    }

    // 5. If hash doesn't exist, create the final path and move the file
    const extension = path.extname(tempFile.originalFilename || '.tmp');
    const finalFilename = `${fileHash}${extension}`;
    const finalPath = path.join(uploadsDir, finalFilename);
    const relativePath = path.join('/uploads', finalFilename).replace(/\\/g, '/');

    try {
      // 5a. Move the temporary file to the final destination
      await fs.promises.rename(tempFilePath, finalPath);
      console.log(`New file saved. Hash: ${fileHash}, Path: ${relativePath}`);
      
      // 5b. Update the manifest
      manifest[fileHash] = relativePath;
      saveManifest(manifest);

      // 5c. Return the new path
      return res.status(200).json({ filePath: relativePath });

    } catch (renameError) {
      console.error(`Error moving file from ${tempFilePath} to ${finalPath}:`, renameError);
      // Attempt to clean up the temporary file if rename failed
      try { await fs.promises.unlink(tempFilePath); } catch {} 
      return res.status(500).json({ error: 'Error saving uploaded file.' });
    }

  } catch (error) {
    console.error('Upload Error:', error);
    // Note: formidable might leave temp files if parse fails early. Might need more robust cleanup.
    return res.status(500).json({ error: 'Error processing upload.' });
  }
} 