import React, { useState, MouseEvent } from "react";
import { Post, useGetPostQuery, useUpdatePostMutation } from "../features/posts/postApi.ts";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/inputs/Input.tsx";
import TextArea from "../components/inputs/TextArea.tsx";
import ClipLoaderButton from "../components/buttons/ClipLoaderButton.tsx";
import { useEditPost } from "../hooks/postHooks.ts";

export default function EditPostRouter() {
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        data: post
    } = useGetPostQuery(Number(id))

    if (!post) {
        navigate('/404')
    }

    const [editedPost, setEditedPost] = useState(post!); 
    const {editPost, isDone, isLoading} = useEditPost()
 

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <Input id="title" required onChange={e => setEditedPost({ ...editedPost, title: e.target.value })} value={editedPost.title} />
            <label htmlFor="post">Post:</label>
            <TextArea id="post" required rows={9} cols={12} onChange={e => setEditedPost({ ...editedPost, body: e.target.value })} value={editedPost.body} />
            <ClipLoaderButton isDone={isDone} isLoading={isLoading} onClick={e => editPost(editedPost)}>Submit</ClipLoaderButton>
        </form>
    )
}