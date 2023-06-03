import React from 'react';

const ImageButtons = ({ imageNames, onImageSelect }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px', // space between buttons
      margin: '20px',
    }}>
      {imageNames.map(name => (
        <button 
          key={name} 
          onClick={() => onImageSelect(name)}
          style={{
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1.5em',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default ImageButtons;
