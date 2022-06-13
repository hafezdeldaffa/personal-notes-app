import React from 'react';
import { NotesAppBody } from './NotesAppBody';
import { NotesHeader } from './NotesHeader';

class NotesApp extends React.Component {
  render() {
    return (
      <div>
        <NotesHeader />
        <NotesAppBody />
      </div>
    );
  }
}

export default NotesApp;
