import React, { useState } from 'react'
import { NewPost, useAddPostMutation } from '../features/posts/postApi.ts'
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import PostEditForm from '../components/PostEditForm.tsx';



export default function NewPostRouter() {

    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()
    const navigate = useNavigate()

    const handleSubmit = async (e : MouseEvent<HTMLButtonElement>, newPost : NewPost) => {
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
        <PostEditForm handleSubmit={handleSubmit} isDone={isDone} isLoading={isLoading} />
    )
}
