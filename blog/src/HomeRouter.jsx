import React, { useCallback, useContext, useState } from 'react'
import { useGetPostsQuery } from './features/posts/postApi.js'
import RetryForm from './components/RetryForm.jsx';
import HomePagePost from "./components/HomePagePost.jsx";
import { useOutletContext } from 'react-router-dom';

export default function HomeRouter() {
    const {
        data: posts,
        refetch,
        isLoading,
        error
    } = useGetPostsQuery()

    const [keyword] = useOutletContext();
    
    const filterPosts = useCallback((posts) => posts.filter(post => keyword === '' ? true : post.body.toLowerCase().includes(keyword.toLowerCase())), [keyword])

    return (
        error ? (
            <RetryForm refetch={refetch} />
        ) :
            isLoading ? (<p className='p-8'>Loading...</p>) :
                posts ? (posts.length === 0 ? <p className='p-8'>No posts to display</p> : filterPosts(posts).map(post => <HomePagePost key={post.id} post={post} />)) : null
    )
}