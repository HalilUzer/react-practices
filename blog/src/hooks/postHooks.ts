import { useState, SetStateAction, Dispatch } from "react";
import { NewPost, Post, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation } from "../features/posts/postApi";
import { useNavigate } from "react-router-dom";

export function usePostSubmit() {
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false)
    const [addPost] = useAddPostMutation()
    const navigate = useNavigate()

    const handlePostSubmit = async (newPost: NewPost) => {
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

    return { handlePostSubmit, isLoading, isDone, setIsDone, setIsLoading }
}

export function usePostDelete(isModalOpen: boolean, setIsModalOpen: Dispatch<SetStateAction<boolean>>, id: string) {
    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate()

    const handlePostDelete = () => {
        deletePost(Number(id));
        setIsModalOpen(false);
        navigate('/');
    }

    return handlePostDelete
}

export function useEditPost() {
    const [isLoading, setIsLoading] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const [updatePost] = useUpdatePostMutation()
    const navigate = useNavigate()

    const editPost = (newPost: Post) => {
        try {
            setIsLoading(true)
            updatePost({ ...newPost })
            setIsDone(true)
            setIsLoading(false)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    return { editPost, isLoading, isDone }
}