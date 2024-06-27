import React from 'react'
import SubmitButton from './SubmitButton';

export default function RetryForm({ refetch }) {

    return (
        <form className='p-12' action="" onSubmit={e => {e.preventDefault()}}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <SubmitButton onClick={e => refetch()}>
                Retry
            </SubmitButton>
        </form>
    )
}