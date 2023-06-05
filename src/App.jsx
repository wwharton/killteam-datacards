import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import SearchBar from './components/SearchBar';
import ImageDisplay from './components/ImageDisplay';
import { imageNames, imageTitles, directories } from './data/imageData.js';
import ImageButtons from './components/ImageButtons';
import DirectoryButtons from './components/DirectoryButtons';
import './App.css';


// Fuse.js options; adjust as needed
const options = {
  includeScore: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "name"
  ]
};

const fuse = new Fuse(imageNames.map(name => ({ name })), options);

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchedImage, setMatchedImage] = useState('');
  const [selectedDirectory, setSelectedDirectory] = useState('orks');


  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = () => {
    // Use Fuse.js to perform the search
    const results = fuse.search(searchTerm);

    // Take the first result, if there are any
    const matched = results.length > 0 ? results[0].item.name : null;

    setMatchedImage(matched ? matched : 'not-found.png'); // Show 'not-found.jpg' if no match
  }

  return (
    <div className="container">
      <div className="buttonContainer">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DirectoryButtons directories={directories} onDirectorySelect={setSelectedDirectory} />
        <ImageButtons 
          imageNames={imageNames} 
          imageTitles={imageTitles} 
          onImageSelect={setMatchedImage} 
          selectedDirectory={selectedDirectory} 
        />
      </div>
      <div className="imageContainer">
        <ImageDisplay imageName={matchedImage} />
      </div>
    </div>
  );
}


export default App;


