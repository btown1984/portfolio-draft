const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// --- Constants ---
const uploadsDir = path.join(process.cwd(), 'public/uploads');
const manifestPath = path.join(process.cwd(), 'uploads-manifest.json');

console.log('Looking for uploads in:', uploadsDir);

// --- Helper Functions (copied/adapted from api/upload.js) ---

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
    stream.on('error', (err) => {
        console.error(`Error reading file for hashing: ${filePath}`, err);
        reject(err);
    });
  });
};

// --- Main Logic ---
async function runDeduplication() {
  console.log('Starting duplicate check in:', uploadsDir);

  if (!fs.existsSync(uploadsDir)) {
    console.error(`Uploads directory does not exist: ${uploadsDir}`);
    return;
  }

  const existingManifest = loadManifest();
  let files;
  try {
      files = await fs.promises.readdir(uploadsDir);
  } catch (err) {
      console.error(`Error reading uploads directory: ${uploadsDir}`, err);
      return;
  }
  
  const hashToFilePaths = {}; // { hash: [path1, path2, ...] }
  let totalFiles = 0;
  let processedFiles = 0;

  console.log(`Found ${files.length} items in uploads directory. Processing files...`);

  // 1. Calculate hashes for all files
  for (const filename of files) {
    const filePath = path.join(uploadsDir, filename);
    let stats;
    try {
        stats = await fs.promises.stat(filePath);
    } catch (statError) {
        console.warn(`\nCould not stat file (maybe deleted during process?): ${filename}`, statError.code);
        continue; // Skip if file info cannot be obtained
    }

    if (stats.isFile()) {
      totalFiles++;
      try {
        const hash = await calculateHash(filePath);
        if (!hashToFilePaths[hash]) {
          hashToFilePaths[hash] = [];
        }
        hashToFilePaths[hash].push(filePath);
        processedFiles++;
        // Simple progress indicator
        if (processedFiles % 10 === 0 || processedFiles === totalFiles) {
            process.stdout.write(`\rProcessed ${processedFiles}/${totalFiles} files...`);
        }
      } catch (error) {
        // Error already logged in calculateHash
        console.error(`\nSkipping file ${filename} due to hashing error.`);
      }
    }
  }
  console.log(`\nFinished hashing ${processedFiles} files.`);

  // 2. Identify duplicates and decide which to keep/delete
  const filesToDelete = [];
  const finalManifest = {}; // Build a clean manifest

  console.log('Identifying duplicates and preparing deletion plan...');
  for (const hash in hashToFilePaths) {
    const paths = hashToFilePaths[hash];
    const relativePathFromManifest = existingManifest[hash]; // e.g., /uploads/hash.ext
    let fileToKeep = null;

    if (paths.length > 1) {
      // Found duplicates
      console.log(`  - Found ${paths.length} files for hash: ${hash.substring(0, 12)}...`);

      // Try to find the file referenced in the manifest
      if (relativePathFromManifest) {
         // Construct the absolute path expected from the manifest entry
         const absolutePathFromManifest = path.join(process.cwd(), 'public', relativePathFromManifest);
         // Check if any of the actual file paths match the one from the manifest
         fileToKeep = paths.find(p => path.resolve(p) === path.resolve(absolutePathFromManifest));

         if(fileToKeep) {
            console.log(`    - Keeping file listed in manifest: ${path.basename(fileToKeep)}`);
         } else {
            console.log(`    - WARNING: File path ${relativePathFromManifest} from manifest not found among duplicates. Keeping first found file instead.`);
         }
      }

      // If not found in manifest, or no manifest entry, keep the first one found
      if (!fileToKeep) {
        fileToKeep = paths[0]; // Keep the first one in the list
        console.log(`    - No manifest entry or file not found. Keeping first encountered: ${path.basename(fileToKeep)}`);
      }

      // Add all other files (that are not the one to keep) to the deletion list
      paths.forEach(p => {
        if (p !== fileToKeep) {
          filesToDelete.push(p);
          console.log(`    - Marking for deletion: ${path.basename(p)}`);
        }
      });
    } else if (paths.length === 1) {
      // Only one file for this hash
      fileToKeep = paths[0];
       // Optional: Verify it matches manifest if entry exists
       if (relativePathFromManifest) {
           const absolutePathFromManifest = path.join(process.cwd(), 'public', relativePathFromManifest);
           if (path.resolve(fileToKeep) !== path.resolve(absolutePathFromManifest)) {
               console.log(`    - WARNING: Manifest path ${relativePathFromManifest} does not match the single file found for hash ${hash.substring(0,12)}... (${path.basename(fileToKeep)}). Manifest will be updated.`);
           }
       } else {
           // File exists but wasn't in manifest, will add it back
           console.log(`    - INFO: Single file ${path.basename(fileToKeep)} found for hash ${hash.substring(0,12)}... was not in manifest. Adding it.`);
       }
    } else {
        // Should not happen, but guard against it
        console.warn(`    - WARNING: No file paths found for hash ${hash.substring(0,12)}... This indicates an issue.`);
    }

    // Add the kept file to the new manifest
    if (fileToKeep) {
        // Create the relative path (e.g., /uploads/filename.ext) for the manifest
        const relativeKeptPath = path.join('/uploads', path.basename(fileToKeep)).replace(/\//g, '/');
        finalManifest[hash] = relativeKeptPath;
    } else if (paths.length > 0) {
        // If we somehow didn't select a file to keep from a list of duplicates
        console.error(`    - CRITICAL ERROR: Failed to select a file to keep for hash ${hash.substring(0,12)}... Duplicates may remain.`);
    }
  }

  // 3. Delete marked files
  if (filesToDelete.length > 0) {
    console.log(`\nDeleting ${filesToDelete.length} duplicate files...`);
    let deletedCount = 0;
    for (const filePath of filesToDelete) {
      try {
        await fs.promises.unlink(filePath);
        deletedCount++;
         if (deletedCount % 10 === 0 || deletedCount === filesToDelete.length) {
             process.stdout.write(`\rDeleted ${deletedCount}/${filesToDelete.length} files...`);
         }
      } catch (error) {
        console.error(`\nError deleting file ${path.basename(filePath)}: ${error.message}`);
      }
    }
    console.log(`\nFinished deleting files.`);
  } else {
    console.log('\nNo duplicate files found to delete.');
  }

  // 4. Save the updated manifest
  console.log('\nSaving updated manifest...');
  saveManifest(finalManifest);
  console.log(`Manifest saved to ${manifestPath}.`);

  console.log('\nDeduplication process complete.');
}

// Execute the main function and catch any top-level errors
runDeduplication().catch(err => {
    console.error("\nAn unexpected error occurred during the deduplication process:", err);
    process.exit(1); // Exit with error code
}); 