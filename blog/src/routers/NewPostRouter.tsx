import React, { useState, MouseEvent } from 'react'
import { NewPost, useAddPostMutation } from '../features/posts/postApi.ts'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';
import Button from '../components/buttons/Button.tsx';
import Input from '../components/inputs/Input.tsx';
import TextArea from '../components/inputs/TextArea.tsx';



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
            <label htmlFor="title">Title:</label>
            <Input id='title' required onChange={e => setNewPost({ ...newPost, title: e.target.value })} value={newPost.title}/>
            <label htmlFor="post">Post:</label>
            <TextArea id='post' required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} value={newPost.body}/>
            <Button onClick={e => handleSubmit(e, newPost!)}>
                {isLoading ? <ClipLoader size={25} /> : isDone ?
                    <MdOutlineDone size={25} /> : "Submit"}
            </Button>
        </form>
    )
}
