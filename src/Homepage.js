import React, {Component} from 'react';
import Sidebar from './Sidebar';
import NotesList from './NotesList';
import styled from 'styled-components';

export const Main = styled.main `
    display: table;
    width: 100%;
    height: 100%;
`;

export default class Homepage extends Component {

    render() {
        return (
            <div>
                {/* <main className="folders-notes"> */}
                <Main>
                    <Sidebar/>
                    <NotesList/>
                </Main>
                {/* </main> */}
            </div>
        )
    }
}