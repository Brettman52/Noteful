import React, {Component} from 'react';
import Moment from 'react-moment';
import './notes.css';
import {Link} from 'react-router-dom';
import NotesContext from './NotesContext';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = styled(Button)`
&& {
background: palevioletred;
color: papayawhip;
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

const StyledNote = styled.div ` 
    margin: 10px;
    border: 1px solid black;
    height: 15vh;
    padding: 10px;
    position: relative;
    min-width: 900px;
    min-height: 100px;
`;

const NoteName = styled.h2 ` 
    font-size: 25px;
`;

const Date = styled.div `
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
`;

export default class Notes extends Component {
    static contextType = NotesContext;

    render() {
        const {name, modified, id} = this.props;

        return (
            // <div className="note">
            <StyledNote>
                <Link to={`/note/${id}`}>
                    {/* <h2 className="noteName"> */}
                    <NoteName>
                        {name}
                    </NoteName>
                    {/* </h2> */}
                </Link>

                {/* <div id="date"> */}
                <Date>
                    Date modified on&nbsp;
                    <Moment format="ll">
                        {modified}
                    </Moment>
                </Date>
                {/* </div> */}

                {/* <button
                    id="delete"
                    onClick={() => {
                    this
                        .context
                        .handleDelete(id)
                }}>
                    Delete Note
                </button> */}

                <DeleteButton
                    variant="contained"
                    size="small"
                    startIcon={< DeleteIcon />}
                    onClick={() => {
                    this
                        .context
                        .handleDelete(id)
                }}>
                    Discard
                </DeleteButton>
                </StyledNote>
            // </div>
        )
    }
}
