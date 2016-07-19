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
  }

  render() {
    return (
      <div>
        <InputBar />
        <Note />
      </div>
    );
  }
}

export default App;
