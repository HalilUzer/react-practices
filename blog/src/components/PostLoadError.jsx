import React from 'react'
import SubmitButton from './SubmitButton';

export default function PostLoadError({ refetch }) {
    return (
        <form className='p-12' action="" onSubmit={e => {e.preventDefault();refetch()}}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <SubmitButton>
                Retry
            </SubmitButton>
        </form>
    )
}