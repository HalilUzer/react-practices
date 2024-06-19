import { useState } from "react";
import DeletePostModal from './DeletePostModal.jsx';
import { MdDelete } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton.jsx";

export default function Post({ post }) {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <article className='pt-8 px-4 pb-8 py-4'>
            <div className="flex items-center justify-normal">
                <div className='w-9/12'><h2>{post.title}</h2>
                    <p className='mt-4 mb-4'>{post.datetime}</p>
                </div>
                <form action="" className="flex justify-around grow" onSubmit={e => e.preventDefault()}>
                    <SubmitButton>
                        <CiSettings className="size-12" onClick={e => navigate(`/edit/${post.id}`)} />
                    </SubmitButton>
                    <SubmitButton>
                        <MdDelete className='hover:text-red-600 size-12' onClick={e => setIsModalOpen(true)} />
                    </SubmitButton>
                </form>
                <DeletePostModal postId={post.id} isModalOpen={isModalOpen}
                    setIsModelOpen={setIsModalOpen} />
            </div>
            <p className='break-words'>{post.body}</p>
        </article>
    )


}
