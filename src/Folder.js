import React, {Component} from 'react';
import './folder.css';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

 export const Wrapper = styled.div `
    background: #778472;
    color: black;
    padding: 20px;
    text-align: center;
    border: 1px solid black;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    list-style-type: none;
`;

export default class Folder extends Component {

    render() {
        const folderName = this.props.name;
        const id = this.props.id; 
        return (
            <div>
                <NavLink to={`/folder/${id}`}>
                    <Wrapper>
                        {folderName}
                    {/* <div id='folder'>{folderName}</div> */}
                    </Wrapper>
                </NavLink>
            </div>
        )
    }
}
