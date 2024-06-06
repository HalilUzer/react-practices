import React from 'react'

export default function PostLoadError({refetch}) {
    return (
        <form className='PostLoadError' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="postLoadErrorButton">There was an error</label>
            <button id='postLoadErrorButton' onClick={() => refetch()}>Retry</button>
        </form>
    )
}
