import React, {Component} from 'react';
import Moment from 'react-moment';
import NotesContext from './NotesContext';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

const StyledNote = styled(Paper)`
&& {
    margin-top: 10px;
    border: 1px solid black;
    height: 15vh;
    padding: 10px;
    position: relative;
    min-width: 600px;
    max-width: 1050px;
    min-height: 100px;
}
`;

const StyledNoteName = styled.h2 `
    font-size: 25px;
`;

const StyledDate = styled.div `
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
`;

const StyledDeleteButton = styled(Button)`
&& {
    background: #BAC7BE;
    color: black;
    position: absolute;
    right: 75px;
    bottom: 0;
    margin-bottom: 20px;
    border: 1px solid black;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: black;
        }
    }
    `;
const StyledNotesDetails = styled.div `
    margin-top: 50px;
    max-width: 900px;
`;
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
                <StyledNote elevation={3}>
                    <StyledNoteName>
                        {name}
                    </StyledNoteName>
                    <StyledDate>
                        Date modified on&nbsp;
                        <Moment format="ll">
                            {modified}
                        </Moment>
                    </StyledDate>
                    <StyledDeleteButton
                        startIcon={< DeleteIcon />}
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
                        Discard
                    </StyledDeleteButton>
                </StyledNote>
                <StyledNotesDetails>
                    {noteDetails}
                </StyledNotesDetails>
            </main>
        )
    }
}
