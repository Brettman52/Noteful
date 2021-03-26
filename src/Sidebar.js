import React, {Component} from 'react';
import './sidebar.css';
import FolderList from './FolderList';
import styled from 'styled-components';

export default class Sidebar extends Component {
    render() {
        const SidebarContent = styled.div `
        display: table-cell;
        height: 80vh;
        width: 20%;
        overflow: auto;
        max-width: 25%;
        `;
        return ( 
        <> 
        <SidebarContent>
            <nav>
                <FolderList/>
            </nav>
        </SidebarContent>
            {/* <nav>
                    <FolderList/>
                </nav> */
        } </>
        )
    }
}