import React, {Component} from 'react';
import Moment from 'react-moment';
import NotesContext from './NotesContext';
import './selectedNote.css';

export default class SelectedNote extends Component {
    static contextType = NotesContext;
    render() {
        const selectedNote = this
            .context
            .notes
            .find(note => note.id === this.props.match.params.noteId);
            
        const {name, modified, content, id} = selectedNote;

        let noteDetails = content
            .split(/\n \r|\n/)
            .map((para, i) => <p key={i}>{para}</p>);

        return (
            <main>
                <div className="note">
                    <h2 className="noteName">
                        {name}
                    </h2>
                    <div id="date">
                        Date modified on&nbsp;
                        <Moment format="ll">
                            {modified}
                        </Moment>
                    </div>
                    <div
                        id="delete"
                        onClick={() => {
                        this
                            .context
                            .handleDelete(id)
                        this
                            .props
                            .history
                            .push('/')
                    }}>
                        Delete Note</div>
                </div>
                <div className="noteDetails">
                    {noteDetails}
                </div>
            </main>
        )
    }
}
