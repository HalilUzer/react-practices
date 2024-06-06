import {useNavigate} from "react-router-dom";


export default function HomePagePost({post}) {

    const navigate = useNavigate();


    return <article className='Post'  onClick={event => navigate(`/post/${post.id}`)}>
        <div className="header">
            <h2 >{post.title}</h2>
            <p className='PostDate'>{post.datetime}</p>
            <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
        </div>
    </article>
}