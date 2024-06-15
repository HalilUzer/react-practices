import React from 'react'
import Header from '../Header.jsx'
import Nav from '../Nav.jsx'
import Footer from '../Footer.jsx'
import { useGetPostQuery } from '../features/posts/postApi.js'
import PostLoadError from '../PostLoadError.jsx'
import Post from "../Post.jsx";
import { useParams } from "react-router-dom";


export default function PostRouter() {


    const { id } = useParams()

    const {
        data: post,
        isLoading,
        refetch,
        error
    } = useGetPostQuery(id)

    return (
        error ? <PostLoadError refetch={refetch} />
            : isLoading ? <p>Loading...</p>
                : post ?
                    <Post post={post} routerMode={true} />
                    : <p> We couldn't found your post </p>
    )
}
