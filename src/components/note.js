import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';
import Textarea from 'react-textarea-autosize';

let z = 0;

class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };

    this.onEdit = this.onEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDrag = this.onDrag.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  onEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onChange() {
    this.props.onSave(this.props.id, { text: document.getElementById('textarea').value });
  }

  onSave() {
    this.setState({ isEditing: !this.state.isEditing });
    this.props.onSave(this.props.id, { text: document.getElementById('textarea').value, z });
    z++;
  }

  onDrag(e, ui) {
    this.props.onDrag(this.props.id, { x: ui.x, y: ui.y });
  }

  renderSomeSection() {
    const position = {
      x: this.props.x,
      y: this.props.y,
    };

    if (this.state.isEditing) {
      return (
        <Draggable
          handle=".handle"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={position}
          zIndex={this.props.z}
          onStart={this.onStartDrag}
          onDrag={this.onDrag}
          onStop={this.onStopDrag}
        >
          <div id="note">
            <span id="topbar">
              <div className="left">
                <a>{this.props.title}</a>
                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.onDelete}></i>
                <i className="fa fa-check" aria-hidden="true" onClick={this.onSave}></i>
              </div>
              <div className="handle">
                <i className="fa fa-arrows-alt" onClick={this.onMove}></i>
              </div>
            </span>
            <div><Textarea id="textarea" defaultValue={this.props.text} onChange={this.onChange} /></div>
          </div>
        </Draggable>
      );
    } else {
      return (
        <Draggable
          handle=".handle"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={position}
          zIndex={this.props.z}
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
            <div id="content" className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.text || '') }} />
          </div>
        </Draggable>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderSomeSection()}
      </div>
    );
  }
}

export default Note;
