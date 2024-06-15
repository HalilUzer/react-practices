import React, { useCallback, useState } from 'react'
import { useGetPostsQuery } from '../features/posts/postApi.js'
import Header from '../Header.jsx'
import Nav from '../Navigation.jsx'
import Footer from '../Footer.jsx'
import PostLoadError from '../PostLoadError.jsx';
import HomePagePost from "../HomePagePost.jsx";

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


