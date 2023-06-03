// scripts/generateImageList.js

const fs = require('fs');
const path = require('path');

const imageDirectory = path.join(__dirname, '../public/images');
const outputFilePath = path.join(__dirname, '../src/data/imageNames.js');

// Function to convert file name to title case
const toTitleCase = (str) => {
  return str.replace(/-/g, ' ')
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
    .replace('.png', '');
};

fs.readdir(imageDirectory, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  const imageNames = files.filter(file => file.endsWith('.png')); // adjust this as needed
  const imageTitles = imageNames.reduce((obj, imageName) => {
    obj[imageName] = toTitleCase(imageName);
    return obj;
  }, {});
  const outputData = `export const imageNames = ${JSON.stringify(imageNames)};
                      export const imageTitles = ${JSON.stringify(imageTitles)};`;

  fs.writeFile(outputFilePath, outputData, err => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File written successfully');
    }
  });
});
