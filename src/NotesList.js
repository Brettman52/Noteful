import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Notes from './Notes';
import NotesContext from './NotesContext';
import './notesList.css';

export default class NotesList extends Component {
    static contextType = NotesContext;
    render() {
        const {notes} = this.context;
        const renderNotes = notes.map(({id, name, modified}) => <Notes key={id} id={id} name={name} modified={modified}/>);
        return (
            <main id='notesContainer'>
                <div id="notesList">
                    {renderNotes}
                </div>
            <Link to='/add-note'>
                <div id='addNote'>Add note</div>
            </Link>
            </main>
        )
    }
}
