import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

function NotesAppBody({ notes, onDelete, addNotes }) {
  return (
    <div className='note-app__body'>
      <NotesInput addNotes={addNotes} />
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} onDelete={onDelete} />
      <h2>Arsip</h2>
      <p className='notes-list__empty-message'>Tidak ada catatan</p>
    </div>
  );
}

export default NotesAppBody;
