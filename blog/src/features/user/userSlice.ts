import { createSlice } from "@reduxjs/toolkit";
import { User } from "./userApi";
import { stat } from "fs";

const initialState: User = {
    accessToken: '',
    username: '',
    roles: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            action.payload
            
        }
    }
})