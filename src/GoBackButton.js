import React, {Component} from 'react';
import './goBackButton.css';
import {withRouter} from 'react-router-dom';

class GoBackButton extends Component {
    render() {
        return (
            <div>
                <div onClick={this.props.history.goBack} id="goBackButton">Go back</div>
            </div>
        )
    }
}

export default withRouter(GoBackButton)
