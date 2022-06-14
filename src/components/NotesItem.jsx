import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NotesItemBody from './NotesItemBody';
import NotesItemDate from './NotesItemDate';
import NotesItemTitle from './NotesItemTitle';

function NotesItem({ id, title, createdAt, body, archived, formatedDate }) {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <NotesItemTitle title={title} />
        <NotesItemDate createdAt={createdAt} />
        <NotesItemBody body={body} />
      </div>
      <div className='note-item__action'>
        <DeleteButton />
        <ArchiveButton />
      </div>
    </div>
  );
}

export default NotesItem;
