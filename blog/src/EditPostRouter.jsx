import React, { useEffect, useState } from "react";
import { useGetPostQuery, useUpdatePostMutation } from "./features/posts/postApi.js";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "./components/SubmitButton.jsx";
import PostEdit from "./components/PostEdit.jsx";

export default function EditPostRouter() {
   
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const {
        data: post
    } = useGetPostQuery(id)

    const [updatePost] = useUpdatePostMutation()


    const handleSubmit = (e, newPost) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            updatePost({ ...post, ...newPost})
            setIsDone(true)
            setIsLoading(false)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <PostEdit handleSubmit={handleSubmit} isDone={isDone} isLoading={isLoading} currentPost={post}/>
    )
}