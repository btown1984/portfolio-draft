import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = new IncomingForm({
    uploadDir: uploadsDir,
    keepExtensions: true,
    filename: (name, ext, part, form) => {
      // Create a unique filename to prevent overwrites
      return `${Date.now()}-${part.originalFilename}`;
    }
  });

  try {
    const [fields, files] = await form.parse(req);
    
    if (!files.media || files.media.length === 0) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const uploadedFile = files.media[0];
    const relativePath = path.join('/uploads', uploadedFile.newFilename).replace(/\\/g, '/');

    // Return the public URL path of the uploaded file
    return res.status(200).json({ filePath: relativePath });

  } catch (error) {
    console.error('Upload Error:', error);
    return res.status(500).json({ error: 'Error processing upload.' });
  }
} 