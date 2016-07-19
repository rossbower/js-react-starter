import React, { Component } from 'react';
// import Draggable from 'react-draggable';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onDelete() {
    console.log('clicked delete');
  }

  onEdit() {
    console.log('clicked edit');
  }

  onMove() {
    console.log('clicked move');
  }

  render() {
    return (
      // <Draggable
      //   handle=".note-mover"
      //   grid={[25, 25]}
      //   defaultPosition={{ x: 20, y: 20 }}
      //   position={null}
      //   onStart={this.onStartDrag}
      //   onDrag={this.onDrag}
      //   onStop={this.onStopDrag}
      // >
      <div id="note">
        <span id="topbar">
          <a>`${this.props.title}`</a>
          <i className="fa fa-trash-o" aria-hidden="true" onClick={this.onDelete}></i>
          <i className="fa fa-pencil" aria-hidden="true" onClick={this.onEdit}></i>
          <i className="fa fa-arrows-alt" onClick={this.onMove}></i>
        </span>
      </div>
      // </Draggable>

    );
  }
}

export default Note;
