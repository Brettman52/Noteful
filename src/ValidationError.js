import React from 'react'
import styled from 'styled-components';

const StyledError = styled.div `
    color: red;
`;

export default function ValidationError (props) {
    if(props.message) {
    return (
        <StyledError>
            {props.message}
        </StyledError>
    );
    }
    return null;
}
