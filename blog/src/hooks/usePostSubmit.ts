import { useState, MouseEvent } from "react";
import { NewPost, useAddPostMutation } from "../features/posts/postApi";
import { useNavigate } from "react-router-dom";

export default function usePostSubmit(){

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

    return {handlePostSubmit, isLoading, isDone, setIsDone, setIsLoading}
}