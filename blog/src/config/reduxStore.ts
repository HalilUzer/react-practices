import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "../features/posts/postApi.ts";
import postsReducer from '../features/posts/postsSlice.ts'
import userReducer from '../features/user/userSlice.ts'

const store = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer,

        posts: postsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(postApi.middleware)
})

export default store;

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']