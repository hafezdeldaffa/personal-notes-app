import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className='note-input__title__char-limit'>Sisa karakter : 50</p>
          <input
            type='text'
            className='note-input__title'
            placeholder='Ini adalah judul'
            value={this.state.title}
            required
            onChange={this.onTitleChangeHandler}
          />
          <textarea
            className='note-input__body'
            placeholder='Tuliskan catatan mu disini...'
            value={this.state.body}
            required
            onChange={this.onBodyChangeHandler}
          ></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
