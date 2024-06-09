import {useState} from "react";
import DeletePostModal from './DeletePostModal';
import {MdDelete} from "react-icons/md";
import {CiSettings} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
import './index.css'

export default function Post({post}) {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <article className='Post' style={{borderBottom: "none", cursor: "default"}}>
            <div className="header">
                <div className='title'><h2>{post.title}</h2>
                    <p className='PostDate'>{post.datetime}</p>
                </div>
                <form action="" onSubmit={event => event.preventDefault()}>
                    <button type='submit' onClick={e => navigate(`/edit/${post.id}`)}>
                        <CiSettings/>
                    </button>
                    <button type='submit' onClick={e => setIsModalOpen(true)}>
                        <MdDelete className='DeleteButton'/>
                    </button>
                </form>
                <DeletePostModal postId={post.id} isModalOpen={isModalOpen}
                                 setIsModelOpen={setIsModalOpen}/>
            </div>
            <p className='Body'>{post.body}</p>
        </article>
    )


}
