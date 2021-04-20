import React, {Component} from 'react';
import Folder from './Folder';
import NotesContext from './NotesContext';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const Wrap = styled.div `
    .active > .folder {
    background-color: #284b63;
    }
`;

const AddFolder = styled(Card)`
&& {
    background: #353535;
    color: black;
    margin-top: 30px;
    padding: 20px;
    border: 1px solid black;
    margin-left: 15px;
    margin-right: 15px;
    list-style-type: none;
    cursor: pointer;
    display: flex;
    align-items:center;
    justify-content: center;
}
`;

export default class FolderList extends Component {
    static contextType = NotesContext;
    render() {
        const folder = this
            .context
            .folders
            .map(({id, name}) => <Folder key={id} name={name} id={id}/>);
        return (
            <Wrap>
                {folder}
                <Link to='/add-folder' style={{textDecoration: 'none'}}>
                    <AddFolder>
                        <CreateNewFolderIcon style={{color: 'white'}}/>
                        <span
                            style={{
                            marginLeft: "5px", color: "white"
                        }}>Add folder</span>
                    </AddFolder>
                </Link>
            </Wrap>
        )
    }
}
