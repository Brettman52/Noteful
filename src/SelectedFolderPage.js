import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotesContext from './NotesContext';
import Notes from './Notes';

export default class SelectedFolderPage extends Component {
    static contextType = NotesContext;
    render() {        
        const renderNotes = this
            .context
            .notes
            .filter(note => note.folderId === this.props.match.params.folderId)
            .map(({id, name, modified}) => <Notes key={id} id={id} name={name} modified={modified}/>)  
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
