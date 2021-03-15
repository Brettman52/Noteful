import React, {Component} from 'react';
import './folder.css';
import {NavLink} from 'react-router-dom';

export default class Folder extends Component {
    render() {
        const folderName = this.props.name;
        const id = this.props.id; 
        
        return (
            <div>
                <NavLink to={`/folder/${id}`}>
                    <div id='folder'>{folderName}</div>
                </NavLink>
            </div>
        )
    }
}
