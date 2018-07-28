import React, { Component } from 'react';

class Note extends Component {
    constructor() {
        super()
        this.handleButtonPress = this.handleButtonPress.bind(this)
        this.handleButtonRelease = this.handleButtonRelease.bind(this)
    }
  
    render() {
        return (
            <div className="note" onMouseDown={this.handleButtonPress}>
            <p>{this.props.note.text}</p>
            </div>
        );
    }
    handleButtonPress() {
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
