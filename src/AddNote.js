import React, {Component} from 'react'
import "./addNote.css";
import NotesContext from './NotesContext';
import moment from 'moment';
import ValidationError from './ValidationError';

export default class AddNote extends Component {

    static contextType = NotesContext;

    state = {
        name: {
            value: "",
            touched: false
        },
        folderId: {
            value: "",
            touched: false
        },
        content: {
            value: "",
            touched: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {name, folderId, content} = this.state;
        const note = {
            id: this.generateId(),
            name: name.value,
            modified: this.generateTime(),
            folderId: folderId.value,
            content: content.value
        };

        this
            .context
            .handleAddNote(note);

        this
            .props
            .history
            .push('/');
    }

    generateId = () => {
        let idHold = [];
        for (let i = 0; i <= 20; i++) {
            if (i === 0 || i === 20 || i % 5 !== 0) {
                idHold.push(Math.floor(Math.random() * 10));
            } else {
                idHold.push('-');
            }
        }
        return idHold.join('');
    }

    generateTime = () => {
        let date = moment().format('YYYY-MM-DDTHH:mm:ss');
        return date;
    }

    updateName = (name) => {
        this.setState({
            name: {
                value: name,
                touched: true
            }
        });
    }

    updateContent = (content) => {
        this.setState({
            content: {
                value: content,
                touched: true
            }
        });
    }

    updateFolderId = (folderId) => {
        this.setState({
            folderId: {
                value: folderId,
                touched: true
            }
        });
    }

    updateNoteId = () => {
        const id = this.generateId()
        this.setState({id: id});
    }

    updateTimeModified = () => {
        const time = this.generateTime();
        this.setState({modified: time})
    }

    validateNoteName = () => {
        if (this.state.name.value.length < 3) {
            return "Note name must have at least 3 characters.";
        }
    }

    validateNoteDetails = () => {
        if (this.state.content.value.length < 1) {
            return "Note details cannot be left blank.";
        }
    }

    validateFolderName = () => {
        if (this.state.folderId.value === "Select a folder") {
            return "Must select a folder.";
        }
    }

    validateFieldsForSaveButton = () => {
        if (this.state.name.value.length < 3 || this.state.content.value.length < 1 || !this.state.folderId.touched || this.state.folderId.value === "Select a folder") {
            return true
        } else {
            return false
        }
    }

    render() {
        const folderOptions = this
            .context
            .folders
            .map(({
                name,
                id
            }, i) => <option value={id} key={id}>{name}</option>);

        return (
            <main>
                <h1 className='noteForm-title'>Add Note</h1>
                <div className='noteFormContent'>
                    <form className='addNote-form' onSubmit={this.handleSubmit}>
                        <label className='addNoteLabel' htmlFor='title'>
                            Note Name
                        </label>
                        <input
                            className="addNoteInput"
                            type="text"
                            id="title"
                            name="title"
                            required
                            onChange={e => this.updateName(e.target.value)}/> {this.state.name.touched && (<ValidationError message={this.validateNoteName()}/>)}
                        <label className='addNoteLabel' htmlFor='details'>
                            Note Details
                        </label>
                        <textarea
                            className="addNoteTextArea"
                            type="textarea"
                            id="details"
                            name="details"
                            onChange={e => this.updateContent(e.target.value)}
                            required/> {this.state.content.touched && (<ValidationError message={this.validateNoteDetails()}/>)}
                        <label className="folderSelectLabel" htmlFor="folderSelect">
                            Folder
                        </label>
                        <select
                            className="folderSelect"
                            onChange={e => this.updateFolderId(e.target.value)}>
                            <option defaultValue="Select a folder">Select a folder</option>
                            {folderOptions}
                        </select>
                        {(this.state.folderId.touched && this.state.folderId.value === "Select a folder") && (<ValidationError message={this.validateFolderName()}/>)}

                        <div className="buttonContainer">
                            <button className="addNoteFormButton" onClick={this.props.history.goBack}>Cancel</button>
                            <button
                                className="addNoteFormButton"
                                type="submit"
                                disabled={this.validateFieldsForSaveButton()}>Save</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}
