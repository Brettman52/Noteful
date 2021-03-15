import React from 'react'
import "./validationError.css";

export default function ValidationError (props) {
    if(props.message) {
    return (
        <div className="error">
            {props.message}
        </div>
    );
    }
    return null;
}
