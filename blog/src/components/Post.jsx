import { MdDelete } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton.jsx";

export default function Post({ post, setIsModalOpen }) {
    const navigate = useNavigate();

    return (
        <article className='pt-8 px-4 pb-8 py-4'>
            <div className="flex items-center justify-normal">
                <div className='w-9/12'><h2>{post.title}</h2>
                    <p className='mt-4 mb-4'>{post.datetime}</p>
                </div>
                <form action="" className="flex justify-around grow" onSubmit={e => e.preventDefault()}>
                    <SubmitButton onClick={e => navigate(`/edit/${post.id}`)}>
                        <CiSettings className="size-12" />
                    </SubmitButton>
                    <SubmitButton onClick={e => setIsModalOpen(true)}>
                        <MdDelete className='group-hover:text-red-600 size-12' />
                    </SubmitButton>
                </form>

            </div>
            <p className='break-words'>{post.body}</p>
        </article>
    )


}
