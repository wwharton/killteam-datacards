import React from 'react';

const DirectoryButtons = ({ directories, onDirectorySelect }) => {
    return (
      <div>
        {directories.map(directory => (
          <button key={directory.directory_path} onClick={() => onDirectorySelect(directory.directory_path)}>
            {directory.directory_title}
          </button>
        ))}
      </div>
    );
  };

export default DirectoryButtons;
  