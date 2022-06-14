import React from 'react';
import { getInitialData } from '../utils';
import NotesAppBody from './NotesAppBody';
import NotesHeader from './NotesHeader';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  render() {
    return (
      <div>
        <NotesHeader />
        <NotesAppBody notes={this.state.notes} />
      </div>
    );
  }
}

export default NotesApp;
