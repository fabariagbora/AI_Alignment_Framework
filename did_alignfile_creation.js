import fs from 'fs/promises'; 

// Exporting the function so it can be used in upload_to_IPFS.js
export async function createDidAlignfile() {
  try {
    const didMetadataPath = 'did_metadata.txt'; 
    const alignFilePath = 'agent_v1.align'; 
    const combinedFilePath = 'did_alignfile.txt'; // Output file

    // Read the contents of the files
    const didMetadataContent = await fs.readFile(didMetadataPath, 'utf8');
    const alignFileContent = await fs.readFile(alignFilePath, 'utf8');

    // Add the comment above the alignment file content
    const alignFileWithComment = `# This is the alignment file. Use without the comment\n${alignFileContent}`;

    // Combine the contents
    const combinedContent = `${didMetadataContent}\n\n${alignFileWithComment}`;

    // Write the combined content into a new file
    await fs.writeFile(combinedFilePath, combinedContent, 'utf8');
    console.log(`Combined file created: ${combinedFilePath}`);
  } catch (error) {
    console.error('Error creating the combined file:', error.message);
  }
}
