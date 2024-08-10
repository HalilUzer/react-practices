import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./reduxHooks";
import { NewUser, Role, setUser, User } from "../features/user/userSlice";
import { useState } from "react";
import { PWD_REGEX, USER_REGEX } from "../config/consts";

export function useSignIn() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleSignIn = async (username : string, password : string) => {
        try {
            const response = await axios.get(`/users?username=${username}&password=${password}`, { data: { username, password } });
            const data = response.data[0];
            const roles : Role[] = [];
            data.roles.forEach((role : string) => roles.push(Role[role as keyof typeof Role]))
            const user : User = {...data, roles};
            dispatch(setUser(user))
            navigate('/');
        }
        catch (e) {
            console.log(e);
        }
    }

    return handleSignIn
}

export function useSignUp(){
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    
    const handleSignUp = async (newUser: NewUser) => {

        try {
            const v1 = USER_REGEX.test(newUser.username)
            const v2 = PWD_REGEX.test(newUser.password)
            if (!v1 || !v2) {
                setErrMsg('Invalid entry')
            }

            const data: User = {
                ...newUser,
                id: Math.ceil(Math.random() * 100).toString(),
                accessToken: Math.random().toString(36).substring(2, 7),
                roles: [Role.USER]
            }
            await axios.post<User>('/users', data)
            setSuccess(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    return {handleSignUp, errMsg, success, setErrMsg, setSuccess}
}

export function useLogOut(){
    
    const logOut = async () => {

    }
}