import React, { useState, MouseEvent } from 'react';
import { useGetPostQuery, useDeletePostMutation } from '../features/posts/postApi.ts'
import { useNavigate, useParams } from "react-router-dom";
import RetryForm from '../components/RetryForm.tsx'
import Post from "../components/Post.tsx";
import DeletePostModal from '../components/DeletePostModal.tsx';
import usePostDelete from '../hooks/usePostDelete.ts';

export default function PostRouter() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams()

    console.log(id)

    if (!id) {
        navigate('/404')
    }

    const handlePostDelete = usePostDelete(isModalOpen, setIsModalOpen, id!)
    const {
        data: post,
        isLoading,
        refetch,
        error
    } = useGetPostQuery(Number(id))


    return (
        error ? <RetryForm refetch={refetch} />
            : isLoading ? <p>Loading...</p>
                : post ?
                    <>
                        <Post post={post} setIsModalOpen={setIsModalOpen} />
                        <DeletePostModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleDelete={handlePostDelete} />
                    </>
                    : <p> We couldnt find your post </p>

    )
}
