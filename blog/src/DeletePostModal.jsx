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
            <dialog className='flex flex-col justify-center fixed -translate-x-1/2 -translate-y-1/2 bg-white border-1 p-14 top-1/2 left-1/2 backdrop:bg-[rgba(0, 0, 0, 0.1)]' ref={dialogRef}>
                <h2>Are You Sure?</h2>
                <form action="" onSubmit={(e) => e.preventDefault()} className='flex justify-around items-center w-full'>
                    <button className='text-2xl text-white w-16 cursor-pointer border p-3 bg-green-600' onClick={handleDelete}>Yes</button>
                    <button className='text-2xl text-white w-16 cursor-pointer border p-3 bg-red-600' onClick={e => setIsModelOpen(false)}>No</button>
                </form>
            </dialog>
        </div>
    )
}
