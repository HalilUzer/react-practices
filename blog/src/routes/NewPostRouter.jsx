import React, { useState } from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import { useDispatch } from 'react-redux'
import { useAddPostMutation } from '../features/posts/postApi'
import { MdOutlineDone } from "react-icons/md";
import { ClipLoader } from 'react-spinners'

export default function NewPostRouter() {
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addPostpromise = addPost({ title: newPostTitle, body: newPostBody })
            setIsLoading(true)
            await addPostpromise;
            setNewPostBody('')
            setNewPostTitle('')
            setIsLoading(false)
            setIsDone(true)
        }
        catch (error) {

        }
    }

    return (
        <div className='NewPostPage'>
            <Header />
            <Nav />
            <main>
                <form className='NewPostForm' action="" onSubmit={handleSubmit} >
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required onChange={e => setNewPostTitle(e.target.value)} autoFocus />
                    <label htmlFor="post">Post:</label>
                    <textarea id="post" required rows={9} cols={10} onChange={e => setNewPostBody(e.target.value)} />
                    <button type="submit">{isLoading ? <ClipLoader size={25} /> : isDone ? <MdOutlineDone size={25} /> : "Submit"}</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}
