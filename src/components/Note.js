import React, { Component } from 'react';

class Note extends Component {
    constructor() {
        super()
        this.handleLongPress = this.handleLongPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
    }
  
    render() {
        return (
            <div className="note" onMouseDown={this.handleLongPress} onMouseUp={this.handleButtonRelease}>
                <p>{this.props.note.text}</p>
            </div>
        );
    }
    handleLongPress() {
        this.buttonPressTimer = setTimeout(() => this.handleDeleteNote(this.props.note), 1500);
    }

    handleButtonRelease() {
        clearTimeout(this.buttonPressTimer);
    }

    handleDeleteNote(note) {
        this.props.handleDeleteNote(note);
    }
}

export default Note;
