import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }

    const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];

    if (uploadedFiles.length === 0) {
      return res.status(400).json({ success: false, message: 'No file provided' });
    }

    try {
        for (const file of uploadedFiles) {
          if (!file || typeof file !== 'object') {
            console.error('Invalid file object:', file);
            continue; // Skip to the next iteration if the file is undefined or not an object
          }
      
          const { name, path: tempPath } = file as any;
          const filename = name.replace(/\s+/g, '_');
          const uploadPath = path.join('/tmp', filename);
      
          await fs.rename(tempPath, uploadPath);
        }
      
        return res.status(200).json({ success: true, message: 'Files uploaded successfully' });
      } catch (error) {
        console.error('Error moving files:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
  });
}
