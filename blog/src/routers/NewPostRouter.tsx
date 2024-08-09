import React, { useState } from 'react'
import { NewPost } from '../features/posts/postApi.ts'
import { usePostSubmit } from '../hooks/postHooks.ts';
import Input from '../components/inputs/Input.tsx';
import TextArea from '../components/inputs/TextArea.tsx';
import ClipLoaderButton from '../components/buttons/ClipLoaderButton.tsx';

export default function NewPostRouter() {
    const [newPost, setNewPost] = useState<NewPost>({ title: '', body: '' });
    const { isDone, isLoading, handlePostSubmit } = usePostSubmit()

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">
                Title:
            </label>
            <Input id='title' required onChange={e => setNewPost({ ...newPost, title: e.target.value })} value={newPost.title} />
            <label htmlFor="post">
                Post:
            </label>
            <TextArea id='post' required rows={9} cols={10} onChange={e => setNewPost({ ...newPost, body: e.target.value })} value={newPost.body} />
            <ClipLoaderButton isDone={isDone} isSubmitted={isLoading} onClick={e => handlePostSubmit(newPost!)}>
                Submit
            </ClipLoaderButton>
        </form>
    )
}
