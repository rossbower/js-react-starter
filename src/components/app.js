import React, { Component } from 'react';
import Immutable from 'immutable';
// import Welcome from './welcome';
import InputBar from './inputbar';
import Note from './note';
// import * as firebase from '../firebase';
import io from 'socket.io-client';
const socketserver = 'http://localhost:9090';

// example class based component (smart component)
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: Immutable.Map(),
    };

    this.socket = io(socketserver);
    this.socket.on('connect', () => { console.log('socket.io connected'); });
    this.socket.on('disconnect', () => { console.log('socket.io disconnected'); });
    this.socket.on('reconnect', () => { console.log('socket.io reconnected'); });
    this.socket.on('error', (error) => { console.log(error); });

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  componentDidMount() {
    this.socket.on('notes', (snapshot) => this.setState({ notes: Immutable.Map(snapshot.val()) }));
  }

  addNote(id, title) {
    // this.setState({
    //   notes: this.state.notes.set(id, { title, x: ((id + 1) * 20), y: ((id + 1) * 20) }),
    // });
    this.socket.emit('createNote', title);
  }

  deleteNote(id) {
    // this.setState({
    //   notes: this.state.notes.delete(id),
    // });
    this.socket.emit('deleteNote', id);
  }

  updateNote(id, fields) {
    // this.setState({
    //   notes: this.state.notes.update(id, (n) => { return Object.assign({}, n, fields); }),
    // });
    this.socket.emit('updateNote', id, fields);
  }

  render() {
    return (
      <div>
        <InputBar onSubmit={this.addNote} />
        {this.state.notes.entrySeq().map(([id, note]) => {
          return <Note id={id} key={id} title={note.title} text={note.text} x={note.x} y={note.y} z={note.z} onDelete={this.deleteNote} onSave={this.updateNote} onDrag={this.updateNote} />;
        })}
      </div>
    );
  }
}

export default App;
