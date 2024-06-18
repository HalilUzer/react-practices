import React, { useState } from 'react'
import { useAddPostMutation } from './features/posts/postApi.js'
import PostEdit from './components/PostEdit.jsx';
import { useNavigate } from 'react-router-dom';

export default function NewPostRouter() {
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()
    const navigate = useNavigate()

    const handleSubmit = async (e, newPost) => {
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
        <PostEdit handleSubmit={handleSubmit} isDone={isDone} isLoading={isLoading}/>
    )
}
