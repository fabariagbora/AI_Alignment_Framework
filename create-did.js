// Imports
import Web3 from "web3";
import { createRequire } from "module";
import { EthrDID } from "ethr-did";
import { getDecryptedKeys } from "./decrypt_keys.js";
import fs from "fs/promises"; 


const require = createRequire(import.meta.url);

(async function main() {
  try {
    // Retrieve decrypted keys
    const decryptedKeys = await getDecryptedKeys();
    const infuraApiKey = decryptedKeys["Decrypted Project ID"]; 

    // Set up Infura URL with the decrypted API key
    const infuraUrl = `https://sepolia.infura.io/v3/${infuraApiKey}`;
    const web3 = new Web3(infuraUrl);

    // Verify connection to Sepolia
    const isListening = await web3.eth.net.isListening();
    if (isListening) {
      console.log("Connected to Sepolia successfully");
    }

    // Create a key pair using EthrDID
    const keypair = EthrDID.createKeyPair();

    // Creating the DID instance using the key pair and Web3 provider
    const did = new EthrDID({
      ...keypair,
      provider: new Web3.providers.HttpProvider(infuraUrl),
      chainId: 11155111, // Specify Sepolia chain ID
    });

    console.log("DID instance:", did);

    // Outputting the DID and metadata into a string
    const didMetadata = {
      did: did.did,
      address: did.address,
      signer: did.signer.toString(),
      alg: did.alg,
      controller: did.controller ? did.controller.address : "N/A",
    };

    console.log("DID Metadata:", JSON.stringify(didMetadata, null, 2));

    // Save the metadata to a file
    const metadataString = JSON.stringify(didMetadata, null, 2); // Pretty print JSON
    await fs.writeFile("did_metadata.txt", metadataString, "utf-8");

    console.log("DID metadata has been saved to `did_metadata.txt`");
  } catch (error) {
    console.error("Error:", error.message);
  }
})();
