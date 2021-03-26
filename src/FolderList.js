import React, {Component} from 'react';
import Folder from './Folder';
import NotesContext from './NotesContext';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AddFolder = styled.div`
    background: palevioletred;
    color: papayawhip;
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    border: 1px solid black;
    margin-left: 15px;
    margin-right: 15px;
    list-style-type: none;
    cursor: pointer;
`;

export default class FolderList extends Component {
    static contextType = NotesContext;
    render() {
        const folder = this
            .context
            .folders
            .map(({id, name}) => <Folder key={id} name={name} id={id}/>);
        return (
            <div id='folderListContent'>
                <div id='folderContainter'>
                    {folder}
                    <Link to='/add-folder'>
                        <AddFolder>
                            Add folder
                        </AddFolder>
                        {/* <div id='addFolder'>Add folder</div> */}
                    </Link>
                </div>
            </div>
        )
    }
}
