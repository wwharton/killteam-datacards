// scripts/generateImageList.js

const fs = require('fs').promises;
const path = require('path');

const imageDirectory = path.join(__dirname, '../public/images');
const outputFilePath = path.join(__dirname, '../src/data/imageData.js');

// Function to convert string to title case
const toTitleCase = (str) => {
  return str.replace(/-/g, ' ')
    .replace('.png', '')
    .replace(/^\w/, (c) => c.toUpperCase());
};


// Recursive function to process directories
async function processDirectory(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  const results = {
    imageNames: [],
    imageTitles: {},
    directories: []
  };

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.directories.push({
        directory_path: path.relative(imageDirectory, fullPath),
        directory_title: toTitleCase(entry.name)
      });
      const subResults = await processDirectory(fullPath);
      results.imageNames.push(...subResults.imageNames);
      Object.assign(results.imageTitles, subResults.imageTitles);
    } else if (entry.name.endsWith('.png') && entry.name !== 'not-found.png') {
      const imageName = path.relative(imageDirectory, fullPath);
      results.imageNames.push(imageName);
      results.imageTitles[imageName] = toTitleCase(entry.name);
    }
  }

  return results;
}

processDirectory(imageDirectory).then(results => {
  const outputData = `export const imageNames = ${JSON.stringify(results.imageNames)};
                      export const imageTitles = ${JSON.stringify(results.imageTitles)};
                      export const directories = ${JSON.stringify(results.directories)};`;

  fs.writeFile(outputFilePath, outputData).then(() => {
    console.log('File written successfully');
  }).catch(err => {
    console.error('Error writing file:', err);
  });
}).catch(err => {
  console.error('Could not list the directory.', err);
});
