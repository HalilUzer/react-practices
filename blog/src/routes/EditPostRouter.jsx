import React, {useState} from "react";
import Header from "../Header";
import Nav from "../Nav";
import {ClipLoader} from "react-spinners";
import {MdOutlineDone} from "react-icons/md";
import Footer from "../Footer";
import {useGetPostQuery, useUpdatePostMutation} from "../features/posts/postApi";
import {useParams} from "react-router-dom";

export default function EditPostRouter() {
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostBody, setNewPostBody] = useState('')

    const {id} = useParams()


    const {
        data: post,
        isLoading,
        isError,
        isFetching,
        refetch,
        error
    } = useGetPostQuery(id)

    const [updatePost, result] = useUpdatePostMutation()



    const handleSubmit = e => {

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
                    <button type="submit">Submit</button>
                </form>
            </main>
            <Footer/>
        </div>
    )
}