import { useState, MouseEvent } from "react"
import { PWD_REGEX, USER_REGEX } from "../config/consts"
import { NewUser, Role, User } from "../features/user/userSlice"
import axios from "../config/axios"

export default function useSignUp(){

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    
    const handleSignUp = async (e: MouseEvent<HTMLButtonElement>, newUser: NewUser) => {
        e.preventDefault()
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