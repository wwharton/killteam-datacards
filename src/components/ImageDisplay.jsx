import React from 'react';

const ImageDisplay = ({ imageName }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%',
      width: '100%',
    }}>
      <img src={`/images/${imageName}`} alt="" style={{ 
        maxWidth: '100%', 
        maxHeight: '100%', 
        objectFit: 'contain' 
      }} />
    </div>
  );
}

export default ImageDisplay;
