import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import SearchBar from './components/SearchBar';
import ImageDisplay from './components/ImageDisplay';
import { imageNames, imageTitles } from './data/imageNames.js';
import ImageButtons from './components/ImageButtons';



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
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
      alignItems: 'flex-start',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        width: '10%', // adjust as needed
      }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ImageButtons imageNames={imageNames} imageTitles={imageTitles} onImageSelect={setMatchedImage} />
      </div>
      <div style={{
        width: '90%', // adjust as needed
      }}>
        <ImageDisplay imageName={matchedImage} />
      </div>
    </div>
  );
}

export default App;


