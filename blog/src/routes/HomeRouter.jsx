import React, { useCallback, useState } from 'react'
import { useGetPostsQuery } from '../features/posts/postApi'
import {useNavigate} from "react-router-dom";
import Header from './../Header'
import Post from '../Post'
import Nav from './../Nav'
import Footer from './../Footer'
import PostLoadError from '../PostLoadError';
import HomePagePost from "../HomePagePost";

export default function HomeRouter() {


    const {
        data: posts,
        refetch,
        isLoading,
        isFetching,
        isError,
        error
    } = useGetPostsQuery()



    const [keyword, setKeyword] = useState('')
    const filterPosts = useCallback((posts) => posts.filter(post => keyword === '' ? true : post.body.toLowerCase().includes(keyword.toLowerCase())), [keyword])


    return (
        <div className='HomePage'>
            <Header />
            <Nav keyword={keyword} setKeyword={setKeyword} type='search' />
            <main>
                {error ? (
                    <PostLoadError refetch={refetch} />
                ) :
                    isLoading ? (<p style={{ padding: '2rem' }}>Loading...</p>) :
                        posts ? (posts.length === 0 ? <p style={{ padding: '2rem' }}>No posts to display</p> : filterPosts(posts).map(post => <HomePagePost key={post.id} post={post} />)) : null}
            </main>
            <Footer />
        </div >
    )
}


