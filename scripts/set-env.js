const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Define the target path for the Angular environment configuration
const targetPath = './src/environments/environment.ts';

// Generate the content for the environment.ts file
const envConfigFile = `export const environment = {
  production: ${process.env.NODE_ENV === 'production'},
  username: '${process.env.NODE_ENV === 'production' ? process.env.USERNAME_PROD : process.env.USERNAME_STAGING}'
};`;

// Write the generated content to the environment.ts file
fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('Error writing environment file:', err);
  } else {
    console.log(`Environment file created at ${targetPath}`);
  }
});
