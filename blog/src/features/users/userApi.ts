import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NewUser {
    username: string,
    password: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3400'
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        registerUser: builder.mutation<void, NewUser>({
            query: newUser => ({
                url: '/users',
                method: 'POST',
                body: { ...newUser }
            }),
            invalidatesTags: ['user']
        })
    })
})

export const {
    useRegisterUserMutation
} = userApi
