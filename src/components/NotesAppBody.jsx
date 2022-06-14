import React from 'react';
import NotesInput from './NotesInput';
import NotesList from './NotesList';

function NotesAppBody({ notes, formatedDate }) {
  return (
    <div className='note-app__body'>
      <NotesInput />
      <h2>Catatan Aktif</h2>
      <NotesList notes={notes} />
      <h2>Arsip</h2>
      <p className='notes-list__empty-message'>Tidak ada catatan</p>
    </div>
  );
}

export default NotesAppBody;
