import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "./postApi.js";


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: [{
            id: 1,
            title: "My First Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 2,
            title: "My 2nd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 3,
            title: "My 3rd Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        },
        {
            id: 4,
            title: "My Fourth Post",
            datetime: "July 01, 2021 11:17:36 AM",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
        }]
    },
    reducers: {
        addPost: (state, action) => {

            const newPost = {
                id: state.value[state.value.length - 1].id + 1,
                title: action.payload.title,
                datetime: new Date().toUTCString(),
                body: action.payload.body
            }
            state.value.push(newPost)
        }
    },

    extraReducers: (builder) => {
        builder.addMatcher(postApi.endpoints.addPost.matchFulfilled,
            (state, { payload }) => {
                console.log(payload)
            })
    },

    selectors: {
        selectPostsByBody: (state, value) => {
            return state.value.filter(post => post.body.includes(value))
        }
    }

})


export const { addPost } = postsSlice.actions
export default postsSlice.reducer