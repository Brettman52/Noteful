import React, {Component} from 'react';
import GoBackButton from './GoBackButton';
import NotesContext from './NotesContext';
import styled from 'styled-components';

const StyledSelectedNav = styled.div `
    display: table-cell;
    height: 80vh;
    width: 25%;
    overflow: auto;
    max-width: 25%;
`;

const StyledSelectedFolder = styled.h2 `
    font-size: 30px;
    display: flex;
    justify-content: center;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 25px;
    font-weight: normal;
`;
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
            <StyledSelectedNav>
                <nav>
                    <GoBackButton/>
                </nav>
                <StyledSelectedFolder>
                    {folder.name}
                </StyledSelectedFolder>
            </StyledSelectedNav>
        )
    }
}
