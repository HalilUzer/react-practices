import React, {useState} from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Footer from '../Footer'
import {useGetPostQuery} from '../features/posts/postApi'
import PostLoadError from '../PostLoadErrore'
import Post from "../Post";


export default function PostRouter({postId}) {

    const {
        data: post,
        isLoading,
        isError,
        isFetching,
        refetch,
        error
    } = useGetPostQuery()

    return (
        <div className='PostPage'>
            <Header/>
            <Nav/>
            <main>
                {error ? <PostLoadError refetch={refetch}/>
                    : isLoading ? <p>Loading...</p>
                        : post ?
                            <Post post={post}/>
                            : <p>We couldn't found your post</p>}
            </main>
            <Footer/>
        </div>
    )
}
