import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header `
    position: absolute;
    font-size: 40px;
    font-family: 'Nanum Gothic', sans-serif;
    top: 40%;
    left: 25%;
`;

const StyledHeaderContent = styled.div `
    border-bottom: 2px solid black;
    height: 20vh;
    position: relative;
    background: #7dcd85;
`;



export default function Header() {
    return (
        // <div id="headerContent">
        <StyledHeaderContent>
            {/* <header> */}
            <StyledHeader>
                <Link to={process.env.PUBLIC_URL + '/'} >
                    Noteful
                </Link>
            </StyledHeader>
            {/* </header> */}
        </StyledHeaderContent>
        // </div>
    )
}
