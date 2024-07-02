import React from 'react'
import Button from './buttons/Button';

type Props = {
    refetch : any
}

export default function RetryForm({ refetch } : Props) {

    return (
        <form className='p-12' action="" onSubmit={e => {e.preventDefault()}}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <Button onClick={e => refetch()}>
                Retry
            </Button>
        </form>
    )
}