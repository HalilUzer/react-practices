import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/posts/postApi.ts";
import { userApi } from "../features/user/userApi.ts";
import postsReducer from '../features/posts/postsSlice.ts'
import userReducer from '../features/user/userSlice.ts'


export default configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        posts: postsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postApi.middleware)
            .concat(userApi.middleware),
})