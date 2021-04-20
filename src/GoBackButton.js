import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';

const GoBack = styled(Card)`
&& {
    padding: 20px;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
    background-color: #3c6e71;
    color: white;
    max-width: 300px;
    margin: 0 auto;
}
`;

class GoBackButton extends Component {
    render() {
        return (
            <div>
                <GoBack onClick={this.props.history.goBack}>
                    Go back
                </GoBack>
            </div>
        )
    }
}

export default withRouter(GoBackButton)
