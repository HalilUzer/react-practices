import React, { useCallback } from 'react'
import { useGetPostsQuery } from '../features/posts/postApi.ts'
import { useOutletContext } from 'react-router-dom';
import { Post } from '../features/posts/postApi.ts';
import RetryForm from '../components/RetryForm.tsx';
import HomePagePost from "../components/HomePagePost.tsx";
export default function HomeRouter() {
    const {
        data: posts,
        refetch,
        isLoading,
        error
    } = useGetPostsQuery()

    const keyword = useOutletContext<string>();
    const filterPosts = useCallback((posts: Post[]) => posts.filter(post => keyword === '' ? true : post.body.toLowerCase().includes(keyword.toLowerCase())), [keyword, posts])

    return (
        error ? (
            <RetryForm refetch={refetch} />
        ) :
            isLoading ? (<p className='p-8'>Loading...</p>) :
                posts ? (posts.length === 0 ? <p className='p-8'>No posts to display</p> : filterPosts(posts).map(post => <HomePagePost key={post.id} post={post} />)) : null
    )
}