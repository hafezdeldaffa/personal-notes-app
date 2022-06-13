import React from 'react';
import { NotesHeader } from './NotesHeader';
import { NotesInput } from './NotesInput';

class NotesApp extends React.Component {
  render() {
    return (
      <div className='note-app__body'>
        <NotesHeader />
        <NotesInput />
      </div>
    );
  }
}

export default NotesApp;
