import { useState } from "react";
import { useGetPostQuery, useUpdatePostMutation } from "../features/posts/postApi.ts";
import { useNavigate, useParams } from "react-router-dom";
import PostEditForm from "../components/PostEditForm.jsx";

export default function EditPostRouter() {
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [updatePost] = useUpdatePostMutation()
    const navigate = useNavigate()
    const { id } = useParams()
    const {
        data: post
    } = useGetPostQuery(id)

    const handleSubmit = (e, newPost) => {
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
        <PostEditForm handleSubmit={handleSubmit} isDone={isDone} isLoading={isLoading} currentPost={post} />
    )
}