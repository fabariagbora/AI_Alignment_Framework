import fs from "fs/promises";
import { appendFileSync, readFileSync, writeFileSync } from "fs";
import axios from "axios";
import FormData from "form-data";
import yaml from "js-yaml";
import { getDecryptedKeys } from "./decrypt_keys.js";
import { createDidAlignfile } from "./did_alignfile_creation.js"; 

// Function to upload file to Pinata
async function uploadFileToPinata(filePath) {
  try {
    // Retrieve decrypted keys
    const decryptedKeys = await getDecryptedKeys();
    const pinataApiKey = decryptedKeys["Decrypted Pinata API Key"]; 
    const pinataSecretKey = decryptedKeys["Decrypted Pinata Secret Key"]; 

    const fileContent = await fs.readFile(filePath); 

    const formData = new FormData();
    formData.append("file", fileContent, "did_alignfile.txt");

    const response = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      headers: {
        ...formData.getHeaders(),
        pinata_api_key: pinataApiKey,
        pinata_secret_api_key: pinataSecretKey,
      },
    });

    const cid = response.data.IpfsHash;
    console.log("File uploaded to IPFS. CID:", cid);

    return cid;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw error;
  }
}

// Function to append CID to `did_metadata.txt`
async function appendCidToMetadata(cid) {
  try {
    console.log("Appending CID to did_metadata.txt...");

    const metadataFilePath = "did_metadata.txt";
    const newEntry = `\nCID: ${cid}\nTimestamp: ${new Date().toLocaleString()}`;

    // Append CID and timestamp to the file
    appendFileSync(metadataFilePath, newEntry, "utf8");

    console.log("CID appended successfully.");
  } catch (error) {
    console.error("Error appending CID to metadata:", error);
  }
}

// Function to update .align file
async function updateAlignFile(cid) {
  try {
    console.log("Updating .align file...");

    const alignFilePath = "agent_v1.align"; 
    const fileContent = readFileSync(alignFilePath, "utf8");

    // Parse YAML content
    const alignData = yaml.load(fileContent);

    // Add a new version entry
    const newVersion = {
      number: (alignData.version?.number || 0) + 1,
      date: new Date().toLocaleString(), // Includes both date and time
      cid: cid,
    };

    alignData.version = newVersion;

    // Write updated data back to .align
    const updatedContent = yaml.dump(alignData);
    writeFileSync(alignFilePath, updatedContent, "utf8");

    console.log("Updated .align file:", updatedContent);
  } catch (error) {
    console.error("Error updating .align file:", error);
  }
}

// Main function
async function main() {
  try {
    const filePath = "did_alignfile.txt"; 

    // Upload file to Pinata
    const cid = await uploadFileToPinata(filePath);

    // Append CID to metadata file
    await appendCidToMetadata(cid);

    // Update the .align file
    await updateAlignFile(cid);

    // Run the did_alignfile_creation function after the upload process
    await createDidAlignfile(); 

    console.log("Process completed successfully.");
  } catch (error) {
    console.error("Error during process:", error);
  }
}


main();
