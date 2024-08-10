import {  SetStateAction, Dispatch } from "react";
import { useDeletePostMutation } from "../features/posts/postApi";
import { useNavigate } from "react-router-dom";

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
