import React, {Component} from 'react';
import './addFolder.css';
import NotesContext from './NotesContext';
import ValidationError from './ValidationError';

export default class AddFolder extends Component {
    static contextType = NotesContext;

    state = {
        id: "",
        name: {
            value: "",
            touched: false
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const folder = {
            id: this.generateId(),
            name: this.state.name.value
        };

        this
            .context
            .handleAddFolder(folder);

        this
            .props
            .history
            .push('/');
    }

    updateFolderName = (folderName) => {
        this.setState({
            name: {
                value: folderName,
                touched: true
            }
        });
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

    validateFolderName = () => {
        if (this.state.name.value.length < 3) {
            return "Folder name must be at least 3 characters long."
        }
    }

    render() {
        return (
            <main id="mainFolderContainer">
                <h1 className='folderForm-title'>Add Folder</h1>
                <div className='folderFormContent'>
                    <form className='addFolder-form' onSubmit={this.handleSubmit}>
                        <label className='addFolderLabel' htmlFor='title'>
                            Folder Name
                        </label>
                        <input
                            className="addFolderInput"
                            type="text"
                            id="title"
                            name="title"
                            onChange={e => this.updateFolderName(e.target.value)}
                            required/> {this.state.name.touched && (<ValidationError message={this.validateFolderName()}/>)}
                        <div className="buttonContainer">
                            <button className="addFormButton" onClick={this.props.history.goBack}>Cancel</button>
                            <button
                                className="addFormButton"
                                type="submit"
                                disabled={!this.state.name.touched || this.state.name.value.length < 3}>Save</button>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}
