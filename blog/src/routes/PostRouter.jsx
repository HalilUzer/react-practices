import React, {useState} from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import {useGetPostQuery} from '../features/posts/postApi'
import PostLoadError from '../PostLoadError'
import Post from "../Post";
import {useParams} from "react-router-dom";


export default function PostRouter() {


    const {id} = useParams()

    const {
        data: post,
        isLoading,
        isError,
        isFetching,
        refetch,
        error
    } = useGetPostQuery(id)

    return (
        <div className='PostPage'>
            <Header/>
            <Nav/>
            <main>
                {error ? <PostLoadError refetch={refetch}/>
                    : isLoading ? <p>Loading...</p>
                        : post ?
                            <Post  post={post} routerMode={true}/>
                            : <p>We couldn't found your post</p>}
            </main>
            <Footer/>
        </div>
    )
}
