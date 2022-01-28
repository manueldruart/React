import React from 'react';
import FileListItem from './FileListItem';
import files from '../data/files';

const FileList = () => (
  <>
    {files.map((u) => (
      <FileListItem
        key={u.id}
        name={u.name}
        type={u.type}
        comment={u.latestCommit.message}
        updateAt={u.update_at}
      />
    ))}
  </>
);

export default FileList;
