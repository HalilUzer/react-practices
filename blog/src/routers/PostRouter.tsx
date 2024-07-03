import React, { useState, MouseEvent } from 'react';
import { useGetPostQuery, useDeletePostMutation } from '../features/posts/postApi.ts'
import { useNavigate, useParams } from "react-router-dom";
import RetryForm from '../components/RetryForm.tsx'
import Post from "../components/Post.tsx";
import DeletePostModal from '../components/DeletePostModal.tsx';

export default function PostRouter() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate()
    const { id } = useParams()
    const {
        data: post,
        isLoading,
        refetch,
        error
    } = useGetPostQuery(Number(id))


    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deletePost(Number(id));
        setIsModalOpen(false);
        navigate('/');
    }

    return (
        error ? <RetryForm refetch={refetch} />
            : isLoading ? <p>Loading...</p>
                : post ?
                    <>
                        <Post post={post}  setIsModalOpen={setIsModalOpen} />
                        <DeletePostModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleDelete={handleDelete} />
                    </>
                    : <p> We couldnt find your post </p>

    )
}