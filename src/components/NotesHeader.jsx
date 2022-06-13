import React from 'react';

function NotesHeader() {
  return (
    <div className='note-app__header'>
      <h1>Notes App</h1>

      <div className='note-search'>
        <input type='text' placeholder='Cari catatan...' />
      </div>
    </div>
  );
}

export { NotesHeader };
