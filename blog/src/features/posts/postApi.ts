import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { format } from "date-fns";

const datetimeFormatStr = 'MMMM dd, yyyy pp'

type Post = {
    id: number,
    title: string,
    body: string
    datetime : string
}

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3500'
    }),
    tagTypes: ['Posts', 'Post'],
    endpoints: (builder) => ({
        getPosts : builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: ['Posts']
        }),

        getPost: builder.query<Post, number>({
            query: postId => (
                {
                    url: `/posts/${postId}`,
                    method: 'GET',
                }),
            providesTags: ['Post']
        }),

        addPost: builder.mutation<void, Post>({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: {
                    title: post.title,
                    body: post.body,
                    id: Math.ceil(Math.random() * 100).toString(),
                    datetime: format(new Date(), datetimeFormatStr)
                }
            }),
            invalidatesTags: ['Posts']
        }),


        deletePost: builder.mutation<void, number>({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id: id.toString() }
            }),
            invalidatesTags: ['Posts']
        }),

        updatePost: builder.mutation<void, Post>({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: { ...post, datetime: format(new Date(), datetimeFormatStr) }
            }),
            invalidatesTags: ['Posts', 'Post']
        }),
    })
})

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = postApi