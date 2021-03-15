import React, {Component} from 'react';
import Header from './Header';
import './app.css';
import {Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import FolderPage from './FolderPage';
import NotePage from './NotePage';
import NotesContext from './NotesContext';
import AddFolder from './AddFolder';
import AddNote from './AddNote';
import {noteData} from "./data";


export default class App extends Component {

    state = {
        notes: noteData.notes,
        folders: noteData.folders
    };

    deleteNote = (noteId) => {
        const newNotes = this
            .state
            .notes
            .filter(note => note.id !== noteId);
        this.setState({notes: newNotes})
    }

    addNote = (note) => {
        this.setState({
            notes: [
                ...this.state.notes,
                note
            ]
        });
    }

    addFolder = (folder) => {
        this.setState({
            folders: [
                ...this.state.folders,
                folder
            ]
        });
    }

    render() {
        const contextValue = {
            folders: this.state.folders,
            notes: this.state.notes,
            handleDelete: this.deleteNote,
            handleAddNote: this.addNote,
            handleAddFolder: this.addFolder
        }
        return (
            <div id='mainContent'>
                <Header/>
                <NotesContext.Provider value={contextValue}>
                    <Switch>
                        <Route path='/folder/:folderId' component={FolderPage}/>
                        <Route path='/note/:noteId' component={NotePage}/>
                        <Route path='/add-folder' component={AddFolder}/>
                        <Route path='/add-note' component={AddNote}/>
                        <Route exact path='/' component={Homepage}/>
                    </Switch>
                </NotesContext.Provider>
            </div>
        )
    }
}
