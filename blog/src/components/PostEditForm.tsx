import React, { MouseEvent, useState } from 'react'

import Button from "./buttons/Button";
import { Post } from '../features/posts/postApi';



type Props = {
    handleSubmit: (e: MouseEvent<HTMLButtonElement>, newPost: Post) => void,
    isLoading: boolean,
    isDone: boolean,
    currentPost?: Post | null
}

export default function PostEditForm({ handleSubmit, isLoading, isDone}: Props) {
    const [newPost, setNewPost] = useState<Post>()

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required onChange={e => setNewPost({ ...newPost, title: e.target.value })} autoFocus className="border border-black border-solid rounded-lg dark:bg-dark-blue " value={newPost.title} />
            <label htmlFor="post">Post</label>
            <textarea id="post" required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} className="border border-black border-solid rounded-lg mb-3 dark:bg-dark-blue" value={newPost.body} />
            <Button onClick={e => handleSubmit(e, newPost)}>
                {isLoading ? <ClipLoader size={25} /> : isDone ?
                    <MdOutlineDone size={25} /> : "Submit"}
            </Button>
        </form>
    )
}
