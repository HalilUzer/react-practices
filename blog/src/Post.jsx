import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import DeletePostModal from './DeletePostModal';
import {MdDelete} from "react-icons/md";
import './index.css'

export default function Post({post}) {


    const [isModalOpen, setIsModalOpen] = useState(false);

    return <article className='Post' style={{borderBottom: "none"}}>
        <div className="content">
            <h2 >{post.title}</h2>
            <p className='PostDate'>{post.datetime}</p>
            <p>{post.body }</p>
        </div>
        <form action="" onSubmit={event => event.preventDefault()}>
            <button type='submit' onClick={e => setIsModalOpen(true)}>
                <MdDelete/>
            </button>
        </form>
        <DeletePostModal postId={post.id} isModalOpen={isModalOpen}
                          setIsModelOpen={setIsModalOpen}/>
    </article>
}
