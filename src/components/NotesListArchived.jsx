import React from 'react';
import NotesItem from './NotesItem';

function NotesListArchived({ notes, onDelete, onArchived }) {
  return (
    <div className='notes-list'>
      {notes
        .filter((note) => note.archived === true)
        .map((note) => (
          <NotesItem
            key={note.id}
            {...note}
            onDelete={onDelete}
            onArchived={onArchived}
            archived={note.archived}
          />
        ))}
    </div>
  );
}

export default NotesListArchived;
