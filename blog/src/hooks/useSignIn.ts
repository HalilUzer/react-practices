import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "./reduxHooks";
import { Role, setUser, User } from "../features/user/userSlice";

export default function useSignIn() {
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