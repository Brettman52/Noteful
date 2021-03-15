import React, {Component} from 'react';
import './sidebar.css';
import FolderList from './FolderList';

export default class Sidebar extends Component {
    render() {
        return (
            <div id='sidebarContent'>
                <nav>
                    <FolderList/>
                </nav>
            </div>
        )
    }
}
