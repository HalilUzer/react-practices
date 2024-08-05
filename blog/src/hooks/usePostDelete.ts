import { useNavigate } from "react-router-dom";
import { useDeletePostMutation } from "../features/posts/postApi";
import { Dispatch, SetStateAction } from "react";

export default function usePostDelete(isModalOpen : boolean, setIsModalOpen : Dispatch<SetStateAction<boolean>>, id : string){

    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate()

    
    const handlePostDelete = () => {
        deletePost(Number(id));
        setIsModalOpen(false);
        navigate('/');
    }

    return handlePostDelete
}