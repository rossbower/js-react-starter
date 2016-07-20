import React, { Component } from 'react';
import Immutable from 'immutable';
// import Welcome from './welcome';
import InputBar from './inputbar';
import Note from './note';

// example class based component (smart component)
class App extends Component {


  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      notes: Immutable.Map(),
      //...
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  addNote(id, title) {
    console.log(`title is ${title}`);
    this.setState({
      notes: this.state.notes.set(id, { title }),
    });
  }

  deleteNote(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  render() {
    return (
      <div>
        <InputBar onSubmit={this.addNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          console.log(`id: ${id}, title: ${note.title}`);
          return <Note id={id} title={note.title} onDelete={this.deleteNote} />;
        })
        }
      </div>
      // move above div if needed <Note title="test" content="ross" />
    );
  }
}

export default App;
