import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/posts/postApi";
import postsReducer from '../features/posts/postsSlice'

export default configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})