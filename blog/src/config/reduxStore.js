import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/posts/postApi.js";
import postsReducer from '../features/posts/postsSlice.js'

export default configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware),
})