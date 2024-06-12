import React, {useState} from 'react'
import Header from '../Header.jsx'
import Nav from '../Nav.jsx'
import Footer from '../Footer.jsx'
import {useAddPostMutation} from '../features/posts/postApi.js'
import SubmitButton from "../SubmitButton.jsx";

export default function NewPostRouter() {
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostBody, setNewPostBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const addPostPromise = addPost({title: newPostTitle, body: newPostBody})
            setIsLoading(true)
            await addPostPromise;
            setNewPostBody('')
            setNewPostTitle('')
            setIsLoading(false)
            setIsDone(true)
        } catch (error) {

        }
    }

    return (
        <div className='NewPostPage'>
            <Header/>
            <Nav/>
            <main>
                <form className='PostForm' action="" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required onChange={e => setNewPostTitle(e.target.value)} autoFocus/>
                    <label htmlFor="post">Post:</label>
                    <textarea id="post" required rows={9} cols={10} onChange={e => setNewPostBody(e.target.value)}/>
                    <SubmitButton isLoading={isLoading} isDone={isDone}/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}
