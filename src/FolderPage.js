import React, {Component} from 'react';
import Sidebar from './Sidebar';
import SelectedFolderPage from './SelectedFolderPage';

export default class FolderPage extends Component {
    render() {
        return (
            <div>
                <main className="folders-notes">
                    <Sidebar/>
                    <SelectedFolderPage match={this.props.match}/>
                </main>
            </div>
        )
    }
}
