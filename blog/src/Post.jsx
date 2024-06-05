import React, {useState} from 'react'
import {redirect} from 'react-router-dom';
import DeletePostModal from './DeletePostModal';
import {MdDelete} from "react-icons/md";

import {useDeletePostMutation} from './features/posts/postApi';
import './index.css'

export default function Post({post, setPost}) {
    const [isModelOpen, setIsModelOpen] = useState(false)

    return (
        <article className='Post'>
            <div className="content">
                <h2>{post.title}</h2>
                <p className='PostDate'>{post.datetime}</p>
                <p>{post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}</p>
            </div>
        </article>
    )
}
