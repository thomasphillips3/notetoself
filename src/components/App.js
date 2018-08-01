import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import Note from './Note';

const cookie_key = 'NOTES';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: [],
            value: ''
        }
    }

    submit() {
        const { notes, text } = this.state;
        notes.push({ text });
        this.setState({ notes })
        bake_cookie(cookie_key, this.state.notes);
    }

    deleteAllNotes() {
        this.setState = ({ notes: [] });
        delete_cookie(cookie_key);
    }

    componentDidMount() {
        this.setState({ notes: read_cookie(cookie_key) });
    }

    deleteNote(key) {
        this.setState(prevState => ({ notes: prevState.notes.filter(note => note !== key) }));
        bake_cookie(cookie_key, this.state.notes);
    }

    editNote(note) {
        const { text } = this.state;
        this.setState({ value: note })
        
        console.log(note)
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl 
                        onChange={event => this.setState({ text: event.target.value })}
                        value={this.state.text}
                    />
                    {' '}
                    <Button onClick={()=>{this.submit()}}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                                <Note 
                                    key={index} 
                                    note={note} 
                                    handleDeleteNote={this.deleteNote.bind(this)} 
                                    handleEditNote={this.editNote.bind(this)}
                                />
                            );
                    })
                }
                <hr/>
                <Button onClick={() => this.deleteAllNotes()}>Delete all Notes</Button>
            </div>
        )
    }
}

export default App;
