import React from 'react'
import SubmitButton from './SubmitButton';

type props = {
    refetch : any
}

export default function RetryForm({ refetch } : props) {

    return (
        <form className='p-12' action="" onSubmit={e => {e.preventDefault()}}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <SubmitButton onClick={e => refetch()}>
                Retry
            </SubmitButton>
        </form>
    )
}