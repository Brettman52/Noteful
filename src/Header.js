import React from 'react';
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
    background-color: #3c6e71;
    text-decoration: none;
`;

const StyledHeading = styled.div `
    color: white;
`;


export default function Header() {
    return (
        <StyledHeaderContent>
            <StyledHeader>
                <Link to={process.env.PUBLIC_URL + '/'} style={{textDecoration: 'none'}}>
                    <StyledHeading>
                        Noteful
                    </StyledHeading>
                </Link>
            </StyledHeader>
        </StyledHeaderContent>
    )
}
