import React, { Component } from 'react';

class InputBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    this.setState({ input: document.getElementById('text').value });
    console.log('Current state: ' + document.getElementById('text').value);
  }

  render() {
    return (
      <div id="inputbar">
        <form onSubmit={this.submit}>
          <input type="text" id="text" placeholder="new note title" />
          <input type="submit" value="Submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default InputBar;
