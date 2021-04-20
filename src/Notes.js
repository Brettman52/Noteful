import React, {Component} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import NotesContext from './NotesContext';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';

const DeleteButton = styled(Button)`
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
    background-color: #284b63;
    color: white;
    }
}
`;

const StyledNote = styled(Paper)` 
&& {
    margin: 10px;
    border: 1px solid black;
    height: 15vh;
    padding: 10px;
    position: relative;
    min-width: 900px;
    min-height: 100px;
    background: #ffffff;

}
`;

const NoteName = styled.h2 ` 
    font-size: 25px;
    color: black;
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
            <StyledNote elevation={3}>
                <Link to={`/note/${id}`} style={{textDecoration: 'none'}}>
                    <NoteName>
                        {name}
                    </NoteName>
                </Link>

                <Date>
                    Date modified on&nbsp;
                    <Moment format="ll">
                        {modified}
                    </Moment>
                </Date>

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
        )
    }
}
