import {useState} from "react";
import DeletePostModal from './DeletePostModal.jsx';
import {MdDelete} from "react-icons/md";
import {CiSettings} from "react-icons/ci";
import {useNavigate} from "react-router-dom";

export default function Post({post}) {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <article className='pt-8 px-4 pb-8 py-4'>
            <div className="flex items-center justify-between">
                <div className='w-10/12'><h2>{post.title}</h2>
                    <p className='mt-4 mb-4'>{post.datetime}</p>
                </div>
                <form action="" onSubmit={e => e.preventDefault()}>
                    <button type='submit' onClick={e => navigate(`/edit/${post.id}`)}>
                        <CiSettings className="size-12"/>
                    </button>
                    <button type='submit' onClick={e => setIsModalOpen(true)}>
                        <MdDelete className='hover:text-red-600 size-12'/>
                    </button>
                </form>
                <DeletePostModal postId={post.id} isModalOpen={isModalOpen}
                                 setIsModelOpen={setIsModalOpen}/>
            </div>
            <p className='break-words'>{post.body}</p>
        </article>
    )


}
