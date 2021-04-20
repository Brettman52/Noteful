import React, {Component} from 'react';
import SelectedNote from './SelectedNote';
import SelectedNoteSidebar from './SelectedNoteSidebar';
import styled from 'styled-components';

const Main = styled.main `
    display: table;
    width: 100%;
    height: 100%;
`;

export default class NotePage extends Component {
    render() {
        return (
            <div>
                <Main>
                    <SelectedNoteSidebar match={this.props.match}/>
                    <SelectedNote match={this.props.match} history={this.props.history}/>
                </Main>
            </div>
        )
    }
}
