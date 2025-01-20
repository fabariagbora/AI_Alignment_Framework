require('dotenv').config();
const crypto = require('crypto');
const { Web3 } = require('web3');  // Import Web3 correctly

// Hexadecimal string (this would be your output)
const hexKey = '5a b0 d4 c7 5d f6 f3 c5 3f bb ff f7 36 84 b3 b4 ac 3e ae f8 cd 87 63 2b e0 5e b0 6d 6a 7c d6 74';

// Convert the hex string back to a Buffer (32 bytes)
const secretKey = Buffer.from(hexKey.replace(/\s+/g, ''), 'hex');


// Check the key length to ensure it's 32 bytes
console.log('Secret Key Length:', secretKey.length); // Should print 32

// Get the encrypted Infura API key from environment variables
const encryptedApiKey = process.env.ENCRYPTED_INFURA_KEY;

// Decrypt the Infura API key
const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from('1234567890123456')); // Same IV used during encryption
let decrypted = decipher.update(encryptedApiKey, 'hex', 'utf8');
decrypted += decipher.final('utf8');

// Now decrypted contains the Infura API key
console.log('Decrypted Infura API Key:', decrypted);

// You can now use the decrypted API key to connect to Infura
const web3 = new Web3(decrypted); // Use the decrypted key to connect
console.log('Connected to Ethereum network via Infura');
