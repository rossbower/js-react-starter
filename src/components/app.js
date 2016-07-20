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

    this.add = this.add.bind(this);
  }

  delete(id) {
    this.setState({
      notes: this.state.notes.delete(id),
    });
  }

  add(id, note) {
    this.setState({
      notes: this.state.notes.set(id, note),
    });
  }

  render() {
    return (
      <div>
        <InputBar />
        <Note title="test" content="ross" />
      </div>
    );
  }
}

export default App;
