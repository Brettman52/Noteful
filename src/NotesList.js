import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Notes from './Notes';
import NotesContext from './NotesContext';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const StyledNotesContainer = styled.main `
    display: table-cell;
`;

const StyledAddNote = styled(Card)`
&& {
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #353535;
    color: white;
}

`;

export default class NotesList extends Component {
    static contextType = NotesContext;
    render() {
        const {notes} = this.context;
        const renderNotes = notes.map(({id, name, modified}) => <Notes key={id} id={id} name={name} modified={modified}/>);
        return (
            <StyledNotesContainer>
                <div id="notesList">
                    {renderNotes}
                </div>
                <Link to='/add-note'>
                <StyledAddNote>
                        <NoteAddIcon/>
                        <span
                            style={{
                            marginLeft: "3px"
                        }}>Add note</span>
                    </StyledAddNote>
                </Link>
            </StyledNotesContainer>
        )
    }
}
