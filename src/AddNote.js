import React, {Component} from 'react'
import NotesContext from './NotesContext';
import moment from 'moment';
import ValidationError from './ValidationError';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const StyledAddNoteContainer = styled.main `
    height: 100vh;
`;

const StyledNoteFormTitle = styled.h1 `
    text-align: center;
    margin-top: 5%;
`;

const StyledNoteFormContent = styled.div `
    height: 60vh;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
`;

const StyledNoteForm = styled.form `
&& {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    border: solid black 2px;
    padding: 25px;
    border-radius: 4px;
    box-shadow: -3px 5px 5px grey;
}
`;

const StyledNameInput = styled(TextField) `
&& {
    height: 20px;
    margin-bottom: 50px;
}
`;

const StyledDetailsLabel = styled.label `
    margin-top: 18px;
    margin-bottom: 10px;
    font-size: 16px;
`;

const StyledTextArea = styled.textarea `
&& {
    height: 200px;
    font-size: 16px;
}
`;

const StyledSelectLabel = styled.label `
&& {
 
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 16px;
}
`;

const StyledSelect = styled(Select) `
&& {
    margin-bottom: 20px;
    font-size: 16px;
    padding: 1px;
    width: 50%;
    height: 30px;
}
`;

const StyledButtonContainer = styled.div `
    position: absolute;
    bottom: 0;
    right: 1%;
    margin-bottom: 5px;
`;

const StyledCancelButton = styled(Button) `
&& {
    margin: 2px;
    border-radius: 4px;
    font-size: 14px;
}
`;

const StyledSubmitButton = styled(Button) `
&& {
    margin: 2px;
    border-radius: 4px;
    font-size: 14px;
}
`;

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

    render() {
            const folderOptions = this
            .context
            .folders
            .map(({
                name,
                id
            }, i) => <MenuItem value={id} key={id}>{name}</MenuItem>);

        return (
            <StyledAddNoteContainer>
               <StyledNoteFormTitle>Add Note</StyledNoteFormTitle>
            
                <StyledNoteFormContent>
                    <StyledNoteForm onSubmit={this.handleSubmit}>
                        
                        <StyledNameInput 
                            type="text"
                            name="noteName"
                            label="Note Name"
                            variant="filled"
                            required
                            onChange={e => this.updateName(e.target.value)}
                        />
                      {this.state.name.touched && (<ValidationError message={this.validateNoteName()}/>)}
                        <StyledDetailsLabel htmlFor="details">
                            Note Details
                        </StyledDetailsLabel>
                        <StyledTextArea 
                            type="textarea"
                            name="details"
                            onChange={e => this.updateContent(e.target.value)}
                            required
                        />
                        {this.state.content.touched && (<ValidationError message={this.validateNoteDetails()}/>)}
                        <StyledSelectLabel>Folder</StyledSelectLabel>
                        <StyledSelect variant="outlined" onChange={e => this.updateFolderId(e.target.value)} defaultValue={""}>
                            {folderOptions}
                        </StyledSelect>
                        
                        {(this.state.folderId.touched && this.state.folderId.value === "Select a folder") && (<ValidationError message={this.validateFolderName()}/>)}

                        <StyledButtonContainer>
                            <StyledCancelButton 
                                onClick={this.props.history.goBack}
                                variant="contained"
                                size="small"
                                >
                                    Cancel
                            </StyledCancelButton>
                            <StyledSubmitButton 
                                type="submit"
                                variant="contained"
                                size="small"
                                disabled={this.state.name.value.length < 3 || this.state.content.value.length < 1 || !this.state.folderId.touched}
                            >
                                Save
                            </StyledSubmitButton>
                        </StyledButtonContainer>
                        
                    </StyledNoteForm>
                </StyledNoteFormContent>
            </StyledAddNoteContainer>
        )
    }
}
