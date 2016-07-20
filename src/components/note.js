import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onEdit = this.onEdit.bind(this);
  }

  onDelete() {
    console.log('clicked delete');
  }

  onEdit() {
    console.log('clicked edit');
    this.setState({ isEditing: true });
  }

  render() {
    return (
      <Draggable
        handle=".handle"
        grid={[25, 25]}
        defaultPosition={{ x: 20, y: 20 }}
        position={null}
        onStart={this.onStartDrag}
        onDrag={this.onDrag}
        onStop={this.onStopDrag}
      >
        <div id="note">
          <span id="topbar">
            <div className="left">
              <a>{this.props.title}</a>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.onDelete}></i>
              <i className="fa fa-pencil" aria-hidden="true" onClick={this.onEdit}></i>
            </div>
            <div className="handle">
              <i className="fa fa-arrows-alt"></i>
            </div>
          </span>
          <div id="content" className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.content || '') }} />
        </div>
      </Draggable>

    );
  }
}

export default Note;
