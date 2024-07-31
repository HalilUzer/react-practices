import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { format } from "date-fns";
import { BASE_URL } from "../../config/urls";

const datetimeFormatStr = 'MMMM dd, yyyy pp'

export interface Post {
    id: number,
    title: string,
    body: string
    datetime: string
}

export interface NewPost {
    title: string,
    body: string
}

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['posts', 'post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: ['posts']
        }),

        getPost: builder.query<Post, number>({
            query: postId => (
                {
                    url: `/posts/${postId}`,
                    method: 'GET',
                }),
            providesTags: ['post']
        }),

        addPost: builder.mutation<void, NewPost>({
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
            invalidatesTags: ['posts']
        }),

        deletePost: builder.mutation<void, number>({
            query: id => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: { id: id.toString() }
            }),
            invalidatesTags: ['posts']
        }),

        updatePost: builder.mutation<void, Post>({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: { ...post, datetime: format(new Date(), datetimeFormatStr) }
            }),
            invalidatesTags: ['posts', 'post']
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