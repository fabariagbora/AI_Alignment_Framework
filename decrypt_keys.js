import crypto from "crypto";
import fs from "fs/promises";
import dotenv from "dotenv";

// Load environment variables from `.env`
dotenv.config();

// Decrypt function
function decrypt(data, key, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export async function getDecryptedKeys() {
  try {
    // Load the secret key and IV
    const secretKey = Buffer.from(await fs.readFile("encryption_key.txt", "utf8"), "hex");
    const iv = Buffer.from(await fs.readFile("encryption_iv.txt", "utf8"), "hex");

    // Encrypted keys from `.env`
    const encryptedKeys = {
      INFURA_PROJECT_ID: process.env.ENCRYPTED_INFURA_PROJECT_ID,
      INFURA_PROJECT_SECRET: process.env.ENCRYPTED_INFURA_PROJECT_SECRET,
      PINATA_API_KEY: process.env.ENCRYPTED_PINATA_API_KEY,
      PINATA_SECRET_KEY: process.env.ENCRYPTED_PINATA_SECRET_KEY,
    };

    // Decrypt all keys
    const decryptedKeys = {
      "Decrypted Project ID": decrypt(encryptedKeys.INFURA_PROJECT_ID, secretKey, iv),
      "Decrypted Project Secret": decrypt(encryptedKeys.INFURA_PROJECT_SECRET, secretKey, iv),
      "Decrypted Pinata API Key": decrypt(encryptedKeys.PINATA_API_KEY, secretKey, iv),
      "Decrypted Pinata Secret Key": decrypt(encryptedKeys.PINATA_SECRET_KEY, secretKey, iv),
    };

    return decryptedKeys;
  } catch (error) {
    console.error("Error decrypting keys:", error.message);
    throw error; // Re-throw for the caller to handle
  }
}
