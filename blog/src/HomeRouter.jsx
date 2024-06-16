import React, { useCallback, useState } from 'react'
import { useGetPostsQuery } from './features/posts/postApi.js'
import PostLoadError from './components/PostLoadError.jsx';
import HomePagePost from "./components/HomePagePost.jsx";

export default function HomeRouter() {
    const {
        data: posts,
        refetch,
        isLoading,
        error
    } = useGetPostsQuery()

    const [keyword, setKeyword] = useState('')
    const filterPosts = useCallback((posts) => posts.filter(post => keyword === '' ? true : post.body.toLowerCase().includes(keyword.toLowerCase())), [keyword])

    return (

        error ? (
            <PostLoadError refetch={refetch} />
        ) :
            isLoading ? (<p style={{ padding: '2rem' }}>Loading...</p>) :
                posts ? (posts.length === 0 ? <p style={{ padding: '2rem' }}>No posts to display</p> : filterPosts(posts).map(post => <HomePagePost key={post.id} post={post} />)) : null

    )
}


