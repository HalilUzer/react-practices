import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NewUser {
    username: string,
    password: string,
}

export interface User {
    username: string
    roles: string[],
    accessToken: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3400'
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signUp: builder.mutation<void, NewUser>({
            query: newUser => ({
                url: '/users',
                method: 'POST',
                body: { ...newUser }
            }),
            invalidatesTags: ['user']
        }),

        signIn: builder.query<User, NewUser>({
            query: newUser => ({
                url: '/users',
                method: 'GET',
                body: { ...newUser }
            }),
            providesTags: ['user']
        })

    })
})

export const {
    useSignUpMutation,
    useSignInQuery
} = userApi
