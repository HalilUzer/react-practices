import React, {useEffect, useState} from "react";
import Header from "../Header";
import Nav from "../Nav";
import {ClipLoader} from "react-spinners";
import {MdOutlineDone} from "react-icons/md";
import Footer from "../Footer";
import {useGetPostQuery, useUpdatePostMutation} from "../features/posts/postApi";
import {useParams} from "react-router-dom";
import SubmitButton from "../SubmitButton";

export default function EditPostRouter() {
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostBody, setNewPostBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const {id} = useParams()

    const {
        data: post
    } = useGetPostQuery(id)

    const [updatePost, result] = useUpdatePostMutation()


    useEffect(() => {
        if (post) {
            setNewPostBody(post.body)
            setNewPostTitle(post.title)
        }
    }, [post]);


    const handleSubmit = e => {
        e.preventDefault()
        try {
            setIsLoading(true)
            updatePost({...post, title: newPostTitle, body: newPostBody})
            setIsDone(true)
            setIsLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='NewPostPage'>
            <Header/>
            <Nav/>
            <main>
                <form className='PostForm' action="" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" required onChange={e => setNewPostTitle(e.target.value)} autoFocus
                           value={newPostTitle}/>
                    <label htmlFor="post">Post:</label>
                    <textarea id="post" required rows={9} cols={10} onChange={e => setNewPostBody(e.target.value)}
                              value={newPostBody}/>
                    <SubmitButton isDone={isDone} isLoading={isLoading}/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}