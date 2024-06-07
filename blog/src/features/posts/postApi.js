import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3500'
    }),
    tagTypes: ['Posts', 'Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: ['Posts']
        }),

        getPost: builder.query({
            query: postId => (
                {
                    url: `/posts/${postId}`,
                    method: 'GET',
                    providesTags: ['Posts']
                })
        }),

        addPost: builder.mutation({
            query: post => ({
                url: '/posts',
                method: 'POST',
                body: {
                    title: post.title,
                    body: post.body,
                    id: Math.ceil(Math.random() * 100).toString(),
                    datetime: new Date()
                }
            }),
            invalidatesTags: ['Posts']
        }),


        deletePost: builder.mutation({
            query: ({id}) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
                body: {id: id.toString()}
            }),
            invalidatesTags: ['Posts']
        }),

        updatePost: builder.mutation({
            query: post => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: {...post, datetime: new Date()}
            }),
            invalidatesTags: ['Posts']
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