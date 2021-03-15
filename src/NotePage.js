import React, {Component} from 'react';
import SelectedNote from './SelectedNote';
import SelectedNoteSidebar from './SelectedNoteSidebar';

export default class NotePage extends Component {
    render() { 
        return (
            <div>
                <main className="folders-notes">
                    <SelectedNoteSidebar match={this.props.match}/>
                    <SelectedNote match={this.props.match} history={this.props.history}/>
                </main>
            </div>
        )
    }
}
