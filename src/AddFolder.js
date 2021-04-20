import React, {Component} from 'react';
import NotesContext from './NotesContext';
import ValidationError from './ValidationError';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const StyledMain = styled.main `
    height: 80vh;
`;

const StyledHeader = styled.h1 `
    text-align: center;
    margin-top: 5%;
`;

const StyledFormContent = styled.div `
    height: 25vh;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`;

const StyledFolderForm = styled.form `
&& {
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    border: solid black 2px;
    padding: 25px;
    border-radius: 4px;
    box-shadow: -3px 5px 5px grey;
}
`;

const StyledLabel = styled.label `
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 22px;
`;

const StyledButtonContainer = styled.div `
    position: absolute;
    bottom: 0;
    right: 1%;
    margin-bottom: 5px;
`;

const StyledCancelButton = styled(Button)`
&& {
    margin: 2px;
    border-radius: 4px;
    font-size: 14px;
}
`;

const StyledSubmitButton = styled(Button)`
&& {
    margin: 2px;
    border-radius: 4px;
    font-size: 14px;
}
`;

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

        console.log("working")

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
        } else if (this.state.name.value.length > 30) {
            return "Folder name cannot exceed 30 characters."
        }
    }

    render() {
        return (
<<<<<<< HEAD
            <main id="addFolderContent">
                <h1 className='folderForm-title'>Add Folder</h1>
                <div className='folderFormContent'>
                    <form className='addFolder-form' onSubmit={this.handleSubmit}>
                        <label className='addFolderLabel' htmlFor='title'>
                            Folder Name
                        </label>
                        <input
                            className="addFolderInput"
=======
            <StyledMain>
                <StyledHeader>Add Folder</StyledHeader>
                <StyledFormContent>
                    <StyledFolderForm elevation={3} onSubmit={this.handleSubmit}>
                        <TextField
                            label="Folder Name"
                            variant="filled"
>>>>>>> style
                            type="text"
                            name="title"
                            onChange={e => this.updateFolderName(e.target.value)}
                            required/> {this.state.name.touched && (<ValidationError message={this.validateFolderName()}/>)}

                        <StyledButtonContainer>
                            <StyledCancelButton
                                onClick={this.props.history.goBack}
                                variant="contained"
                                size="small">
                                Cancel
                            </StyledCancelButton>
                            <StyledSubmitButton
                                variant="contained"
                                size="small"
                                type="submit"
                                disabled={!this.state.name.touched || this.state.name.value.length < 3 || this.state.name.value.length > 30}>Save</StyledSubmitButton>
                        </StyledButtonContainer>
                    </StyledFolderForm>
                </StyledFormContent>
            </StyledMain>
        )
    }
}
