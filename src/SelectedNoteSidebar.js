import React, {Component} from 'react';
import GoBackButton from './GoBackButton';
import NotesContext from './NotesContext';
import './selectedNoteSidebar.css';

export default class SelectedNoteSidebar extends Component {
    static contextType = NotesContext;
    render() {
        const selectedNote = this
            .context
            .notes
            .find(note => note.id === this.props.match.params.noteId);
        const folder = this
                .context
                .folders
                .find(folder => folder.id === selectedNote.folderId)
        return (
            <div id='selectedNoteSidebarContent'>
                <nav>
                    <GoBackButton/>
                </nav>
                <h2 id="selectedFolderName">{folder.name}</h2>
            </div>
        )
    }
}
