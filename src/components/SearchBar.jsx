import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input 
      type="text" 
      placeholder="Search..." 
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      style={{ 
        width: '80%', 
        fontSize: '1.5em' // Adjust this value to fit your needs
      }}
    />
  );
}

export default SearchBar;
