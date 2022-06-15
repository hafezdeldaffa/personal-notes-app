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
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
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

  onArchivedHandler(id) {
    const note = this.state.notes.find((note) => note.id === id);
    note.archived = true;
    this.setState({ note });
  }

  render() {
    return (
      <div>
        <NotesHeader />
        <NotesAppBody
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          addNotes={this.onAddNotesHandler}
          onArchived={this.onArchivedHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
