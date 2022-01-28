import React from 'react';
import FileIcon from './FileIcon';

const FileName = ({ type, name }) => (
  <div className="flex">
    <span className="pr-2">
      <FileIcon type={type} />{' '}
    </span>
    <span>{name}</span>
  </div>
);

export default FileName;
