import React, { MouseEvent, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { MdOutlineDone } from 'react-icons/md';
import SubmitButton from "./buttons/SubmitButton";
import { NewPost, Post } from '../features/posts/postApi';



type Props = {
    handleSubmit: (e: MouseEvent<HTMLButtonElement>, newPost: NewPost) => void,
    isLoading: boolean,
    isDone: boolean,
    currentPost?: Post | null
}

export default function PostEditForm({ handleSubmit, isLoading, isDone, currentPost = null }: Props) {
    const [newPost, setNewPost] = useState(currentPost ? currentPost : { title: '', body: '' })

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required onChange={e => setNewPost({ ...newPost, title: e.target.value })} autoFocus className="border border-black border-solid rounded-lg dark:bg-dark-blue " value={newPost.title} />
            <label htmlFor="post">Post</label>
            <textarea id="post" required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} className="border border-black border-solid rounded-lg mb-3 dark:bg-dark-blue" value={newPost.body} />
            <SubmitButton onClick={e => handleSubmit(e, newPost)}>
                {isLoading ? <ClipLoader size={25} /> : isDone ?
                    <MdOutlineDone size={25} /> : "Submit"}
            </SubmitButton>
        </form>
    )
}
