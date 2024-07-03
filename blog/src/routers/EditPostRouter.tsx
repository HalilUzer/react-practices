import React, { useState, MouseEvent } from "react";
import { Post, useGetPostQuery, useUpdatePostMutation } from "../features/posts/postApi.ts";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { MdOutlineDone } from 'react-icons/md';
import Button from "../components/buttons/Button.tsx";
import Input from "../components/inputs/Input.tsx";
import TextArea from "../components/inputs/TextArea.tsx";

export default function EditPostRouter() {
    const navigate = useNavigate()
    const { id } = useParams()
    const {
        data: post
    } = useGetPostQuery(Number(id))

    if (!post) {
        navigate('/')
    }

    const [editedPost, setEditedPost] = useState(post!);
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [updatePost] = useUpdatePostMutation()


    const handleSubmit = (e: MouseEvent<HTMLButtonElement>, newPost: Post) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            updatePost({ ...post, ...newPost })
            setIsDone(true)
            setIsLoading(false)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className='flex flex-col p-3' action="" onSubmit={e => e.preventDefault()}>
            <label htmlFor="title">Title:</label>
            <Input id="title" required onChange={e => setEditedPost({ ...editedPost, title: e.target.value })} value={editedPost.title} />
            <label htmlFor="post">Post:</label>
            <TextArea id="post" required onChange={e => setEditedPost({ ...editedPost, body: e.target.value })} value={editedPost.body} />
            <Button onClick={e => handleSubmit(e, editedPost)}>
                {isLoading ? <ClipLoader size={25} /> : isDone ?
                    <MdOutlineDone size={25} /> : "Submit"}
            </Button>
        </form>
    )
}