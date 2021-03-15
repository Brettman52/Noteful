import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div id="headerContent">
            <header>
                <Link to={process.env.PUBLIC_URL + '/'} >
                    Noteful
                </Link>
            </header>
        </div>
    )
}
