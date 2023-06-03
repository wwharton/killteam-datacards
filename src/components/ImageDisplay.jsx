import React from 'react';

const ImageDisplay = ({ imageName }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: 'calc(100vh - 230px)', // adjust this based on the size of your header
      width: '100vw'
    }}>
      <img src={`./images/${imageName}`} alt="" style={{ 
        maxWidth: '100%', 
        maxHeight: '100%', 
        objectFit: 'contain' 
      }} />
    </div>
  );
}

export default ImageDisplay;
