import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../config/consts";
import { NewUser, User } from "./userSlice";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        signIn: builder.query<User, NewUser>({
            query: newUser => ({
                url: `/users?username=${newUser.username}&password=${newUser.password}`,
                method: 'GET',
                body: {

                }
            }),
            providesTags: ['user']
        })
    })
})