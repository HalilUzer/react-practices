import React from 'react'
import SubmitButton from './SubmitButton';

type Props = {
    refetch : any
}

export default function RetryForm({ refetch } : Props) {

    return (
        <form className='p-12' action="" onSubmit={e => {e.preventDefault()}}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <SubmitButton onClick={e => refetch()}>
                Retry
            </SubmitButton>
        </form>
    )
}