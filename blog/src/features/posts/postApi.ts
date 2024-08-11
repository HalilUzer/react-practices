import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { format } from "date-fns";
import { BASE_URL } from "../../config/consts";
import { DATETIME_FORMAT } from "../../config/consts";

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
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: (result, error, arg) =>
                result
                    ? [...result.map(({ id }) => ({ type: 'posts' as const, id })), 'posts']
                    : ['posts'],
        }),

        getPost: builder.query<Post, number>({
            query: id => (
                {
                    url: `/posts/${id}`,
                    method: 'GET',
                }),
            providesTags: (result, error, arg) => [{ type: 'posts', id: arg }],
        }),

        addPost: builder.mutation<void, NewPost>({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: {
                    title: post.title,
                    body: post.body,
                    id: Math.ceil(Math.random() * 100).toString(),
                    datetime: format(new Date(), DATETIME_FORMAT),
                
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
            invalidatesTags: (result, error, arg) => [{ type: 'posts', id: arg }],
        }),

        updatePost: builder.mutation<void, Post>({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: { ...post, datetime: format(new Date(), DATETIME_FORMAT) }
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'posts', id: arg.id }],
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