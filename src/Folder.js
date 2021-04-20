import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import FolderIcon from '@material-ui/icons/Folder';

const StyledFolderName = styled(Card)`
 && {
    background-color: #3c6e71;
    color: lightgray;
    padding: 20px;
    border: 1px solid black;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    list-style-type: none;
    display:flex;
    align-items: center;    
 }
`;

const StyledFolderIcon = styled(FolderIcon)`
    margin-right: 60px; 
`;

export default class Folder extends Component {
    render() {
        const folderName = this.props.name;
        const id = this.props.id;
        return (
            <div>
                <NavLink to={`/folder/${id}`} style={{textDecoration: 'none'}}>
                    <StyledFolderName className="folder">
                        <StyledFolderIcon/> {folderName}
                    </StyledFolderName>
                </NavLink>
            </div>
        )
    }
}
