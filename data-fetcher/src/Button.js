import React from 'react'
import './Button.css'

const Button = ({ buttonText, requestedApi, setRequestedApi }) => {

    const focusedStyle = { backgroundColor: "black", color: "white" };

    return (
        <button type='button' onClick={e => setRequestedApi(buttonText)} style={requestedApi === buttonText ? focusedStyle : {}}>{buttonText}</button>
    )
}

export default Button