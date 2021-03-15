import React, {Component} from 'react';
import Folder from './Folder';
import NotesContext from './NotesContext';
import {Link} from 'react-router-dom';

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
                <div id='addFolder'>Add folder</div>
            </Link>
                </div>
            </div>
        )
    }
}
