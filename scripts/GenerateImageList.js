// scripts/generateImageList.js

const fs = require('fs');
const path = require('path');

const imageDirectory = path.join(__dirname, '../public/images');
const outputFilePath = path.join(__dirname, '../src/data/imageNames.json');

fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const imageNames = files.filter(file => file.endsWith('.png')); // adjust this as needed

  fs.writeFile(outputFilePath, JSON.stringify(imageNames), err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });
});
