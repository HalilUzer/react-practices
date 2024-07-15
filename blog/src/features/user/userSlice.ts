import { createSlice } from "@reduxjs/toolkit";
import { User } from "./userApi";

const initialState: User = {
    accessToken: '',
    roles: [],
    username: ''
}

export const userApiSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(user: User){
            
        }
    }

})