import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';
import NotesListArchived from './NotesListArchived';

function NotesAppBody({ notes, onDelete, addNotes, onArchived }) {
  if (!notes.archived) {
    return (
      <div className='note-app__body'>
        <NotesInput addNotes={addNotes} />
        <h2>Catatan Aktif</h2>
        <NotesList notes={notes} onDelete={onDelete} onArchived={onArchived} />
        <h2>Arsip</h2>
        <NotesListArchived
          notes={notes}
          onDelete={onDelete}
          onArchived={onArchived}
        />
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
      </div>
    );
  }
  return null;
}

export default NotesAppBody;
