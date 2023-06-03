import React from 'react';

const ImageButtons = ({ imageNames, imageTitles, onImageSelect }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px', // space between buttons
      margin: '20px',
      flexDirection: 'column', 
      alignItems: 'left',
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
            width: '10',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {imageTitles[name]}
        </button>
      ))}
    </div>
  );
}

export default ImageButtons;
