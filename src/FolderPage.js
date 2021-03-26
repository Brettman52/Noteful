import React, {Component} from 'react';
import Sidebar from './Sidebar';
import SelectedFolderPage from './SelectedFolderPage';
import styled from 'styled-components';

const Main = styled.main `
    display: table;
    width: 100%;
    height: 100%;
    `;

export default class FolderPage extends Component {
    render() {
        return (
            <div>
                {/* <main className="folders-notes"> */}
                <Main>
                    <Sidebar/>
                    <SelectedFolderPage match={this.props.match}/>
                </Main>
                {/* </main> */}
            </div>
        )
    }
}
