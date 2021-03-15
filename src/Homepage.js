import React, {Component} from 'react';
import Sidebar from './Sidebar';
import NotesList from './NotesList';

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <main className="folders-notes">
                    <Sidebar/>
                    <NotesList/>
                </main>
            </div>
        )
    }
}