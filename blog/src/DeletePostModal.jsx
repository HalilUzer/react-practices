import { useEffect, useRef } from 'react';
import { useDeletePostMutation } from './features/posts/postApi.js';
import { useNavigate } from "react-router-dom";


export default function DeletePostModal({ postId, isModalOpen, setIsModelOpen }) {

    const dialogRef = useRef()
    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate();

    useEffect(() => {

        if (isModalOpen) {
            dialogRef.current?.showModal()
        }
        else {
            dialogRef.current?.close()
        }
    }, [isModalOpen])

    if (!isModalOpen) return null



    const handleDelete = (e) => {
        e.preventDefault();
        deletePost({ id: postId });
        setIsModelOpen(false);
        navigate('/');
    }

    return (
        <div className="">
            <dialog className='Modal' ref={dialogRef}>
                <h2>Are You Sure?</h2>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <button className='AcceptButton' onClick={handleDelete}>Yes</button>
                    <button className='DenyButton' onClick={e => setIsModelOpen(false)}>No</button>
                </form>
            </dialog>
        </div>
    )
}
