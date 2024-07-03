import React, { useState } from 'react'
import { NewPost, useAddPostMutation } from '../features/posts/postApi.ts'
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import Button from '../components/buttons/Button.tsx';



export default function NewPostRouter() {

    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()
    const [newPost, setNewPost] = useState<NewPost>({ title: '', body: '' });
    const navigate = useNavigate()

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>, newPost: NewPost) => {
        e.preventDefault();
        try {
            const addPostPromise = addPost(newPost)
            setIsLoading(true)
            await addPostPromise;
            setIsLoading(false)
            setIsDone(true)
            navigate('/')
        } catch (error) {
        }
    }

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" required onChange={e => setNewPost({ ...newPost, title: e.target.value })} autoFocus className="border border-black border-solid rounded-lg dark:bg-dark-blue " value={newPost.title} />
            <label htmlFor="post">Post</label>
            <textarea id="post" required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} className="border border-black border-solid rounded-lg mb-3 dark:bg-dark-blue" value={newPost.body} />
            <Button onClick={e => handleSubmit(e, newPost!)}>
                {isLoading ? <ClipLoader size={25} /> : isDone ?
                    <MdOutlineDone size={25} /> : "Submit"}
            </Button>
        </form>
    )
}
