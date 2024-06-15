import {useDeletePostMutation} from './features/posts/postApi.js';
import {useNavigate} from "react-router-dom";


export default function DeletePostModal({postId, isModalOpen, setIsModelOpen}) {



    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate();
    if (!isModalOpen) return null



    const handleDelete = (e) => {
        e.preventDefault();
        deletePost({id: postId});
        setIsModelOpen(false);
        navigate('/');
    }

    return (
        <div className="fixed bg-[rgba(0, 0, 0, 0.5)] top-0 left-0 w-full h-full z-20">
            <dialog className='Modal'>
                <h2>Are You Sure?</h2>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <button className='AcceptButton' onClick={handleDelete}>Yes</button>
                    <button className='DenyButton' onClick={e => setIsModelOpen(false)}>No</button>
                </form>
            </dialog>
        </div>
    )
}
