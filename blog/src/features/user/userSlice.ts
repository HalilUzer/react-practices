import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


export enum Role {
    USER
}

export interface NewUser {
    username: string,
    password: string,
}

export interface User {
    username: string,
    id: string,
    roles: Role[],
    accessToken: string
}

export interface UserRedux extends User {
    isLoggedIn: boolean
}

const initialState: UserRedux = {
    id: '',
    accessToken: '',
    username: '',
    roles: [],
    isLoggedIn: false
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

        setRoles: (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload
        },

        setUser: (state, action: PayloadAction<User>) => {
            const user: User = action.payload;
            state = { username: user.username, accessToken: user.accessToken, id: user.id, roles: user.roles, isLoggedIn: true }
            return state;
        },

        logOut(state, action: PayloadAction<void>) {
            state = initialState;
            return state;
        }
    },
})


export const { setUser, setAccessToken, setRoles, setUsername, logOut } = userSlice.actions
export default userSlice.reducer