import React from 'react';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

const FileListItem = ({ name, type, comment, updateAt }) => (
  <div className="grid grid-cols-3 border-b items-center h-12">
    <FileName name={name} type={type} />
    <CommitMessage comment={comment} />
    <Time updateAt={updateAt} />
  </div>
);

export default FileListItem;
