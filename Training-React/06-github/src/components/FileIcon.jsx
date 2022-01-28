import React from 'react';

const FileIcon = ({ type }) => (
  <span>
    {type === 'file' ? (
      <img className="w-5 h-5" src="/icons/file.svg" alt="File icon" />
    ) : (
      <img className="w-5 h-5" src="/icons/folder.svg" alt="Folder icon" />
    )}
  </span>
);

export default FileIcon;
