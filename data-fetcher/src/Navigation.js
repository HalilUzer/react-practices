import React, { useState } from 'react'
import Button from './Button';
import './Navigation.css'


const Navigation = ({ requestedApi, setRequestedApi }) => {
    return (
        <nav>
            <Button
                buttonText={"users"}
                requestedApi={requestedApi}
                setRequestedApi={setRequestedApi} />

            <Button buttonText={"posts"}
                requestedApi={requestedApi}
                setRequestedApi={setRequestedApi} />

            <Button
                buttonText={"comments"}
                requestedApi={requestedApi}
                setRequestedApi={setRequestedApi} />

        </nav>
    )
}

export default Navigation 