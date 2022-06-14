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

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: Date.now(),
            archived: false,
          },
        ],
      };
    });
  };

  render() {
    return (
      <div>
        <NotesHeader />
        <NotesAppBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          addNotes={this.onAddNotesHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
