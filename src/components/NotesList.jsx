import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchived }) {
  return (
    <div className='notes-list'>
      {notes
        .filter((note) => note.archived === false)
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

export default NotesList;
