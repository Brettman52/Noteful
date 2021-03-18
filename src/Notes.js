import React, {Component} from 'react';
import Moment from 'react-moment';
import './notes.css';
import {Link} from 'react-router-dom';
import NotesContext from './NotesContext';

export default class Notes extends Component {
    static contextType = NotesContext;
    render() {
        const {name, modified, id} = this.props;
        return (
            <div className="note">
                <Link to={`/note/${id}`}>
                    <h2 className="noteName">
                        {name}
                    </h2>
                </Link>

                <div id="date">
                    Date modified on&nbsp;
                    <Moment format="ll">
                        {modified}
                    </Moment>
                </div>

                <div
                    id="delete"
                    onClick={() => {
                    this
                        .context
                        .handleDelete(id)
                }}>
                    Delete Note
                </div>

            </div>
        )
    }
}
