import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import SearchBar from './SearchBar';
import ImageDisplay from './components/ImageDisplay';
import imageNames from './data/imageNames.json';
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
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px',
        flexDirection: 'column', 
      alignItems: 'center',
      justifyContent: 'flex-start',
      }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ImageButtons imageNames={imageNames} onImageSelect={setMatchedImage} />
        {/* {searchTerm && <p>Showing results for: {searchTerm}</p>} */}
        {/* {matchedImage && <p>Matched image: {matchedImage}</p> } */}
      </div>
      <ImageDisplay imageName={matchedImage} />
    </div>
  );
}

export default App;


