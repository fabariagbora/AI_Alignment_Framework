import Web3 from 'web3';
import { createRequire } from 'module';
import { EthrDID } from 'ethr-did';  // Make sure you're importing EthrDID correctly
import fs from 'fs';  // Import the File System module to write to a file

// Use createRequire to import CommonJS modules
const require = createRequire(import.meta.url);

// Infura API key (replace with your actual API key)
const infuraApiKey = 'efa8319ecae64f6db17897f58015bd58';  // Replace with your actual Infura API key
const infuraUrl = `https://mainnet.infura.io/v3/${infuraApiKey}`;
const web3 = new Web3(infuraUrl);

// Create a key pair using EthrDID
const keypair = EthrDID.createKeyPair();

// Create the DID instance using the key pair and Web3 provider
const did = new EthrDID({
  ...keypair,
  provider: new Web3.providers.HttpProvider(infuraUrl),  // Use the HTTP provider here
});

console.log('DID instance:', did);  // Log the DID instance

// Output the DID and metadata into a text file
const didMetadata = {
  did: did.did,
  address: did.address,
  signer: did.signer.toString(),
  alg: did.alg,
  controller: did.controller ? did.controller.address : 'N/A',
};

// Convert the metadata to a string for better formatting
const didMetadataString = JSON.stringify(didMetadata, null, 2);

// Output the DID metadata into a text file
fs.writeFileSync('did_metadata.txt', didMetadataString, 'utf-8');
console.log('DID metadata has been saved to did_metadata.txt');
