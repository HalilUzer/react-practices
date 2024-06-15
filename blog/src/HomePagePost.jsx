import {useNavigate} from "react-router-dom";


export default function HomePagePost({post}) {

    const navigate = useNavigate();


    return <article className='pt-8 px-4 pb-8 py-4' onClick={e => navigate(`/post/${post.id}`)}>
        <div className="flex items-center justify-between">
            <h2>{post.title}</h2>
            <p className='mt-4 mb-4'>{post.datetime}</p>
            <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
        </div>
    </article>
}