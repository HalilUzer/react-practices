import { useState } from 'react';
import { useGetPostQuery, useDeletePostMutation } from '../features/posts/postApi.ts'
import { useNavigate, useParams } from "react-router-dom";
import RetryForm from '../components/RetryForm.tsx'
import Post from "../components/Post.tsx";
import DeletePostModal from '../components/DeletePostModal.jsx';

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
    } = useGetPostQuery(id)


    const handleDelete = (e) => {
        e.preventDefault();
        deletePost({ id: post.id });
        setIsModalOpen(false);
        navigate('/');
    }

    return (
        error ? <RetryForm refetch={refetch} />
            : isLoading ? <p>Loading...</p>
                : post ?
                    <>
                        <Post post={post} routerMode={true} setIsModalOpen={setIsModalOpen} />
                        <DeletePostModal isModalOpen={isModalOpen}
                            setIsModelOpen={setIsModalOpen} handleDelete={handleDelete} />
                    </>
                    : <p> We couldnt find your post </p>

    )
}
