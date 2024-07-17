import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./userApi";

const initialState: User = {
    accessToken: '',
    username: '',
    roles: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload
        },

        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },

        setRoles: (state, action: PayloadAction<string[]>) => {
            state.roles = action.payload
        },

        setUser: (state, action: PayloadAction<User>) => {
            state = action.payload
        }
    }
})


export const { setUser, setAccessToken, setRoles, setUsername } = userSlice.actions

export default userSlice.reducer