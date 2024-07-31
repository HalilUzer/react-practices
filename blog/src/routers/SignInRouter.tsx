import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { USER_REGEX, PWD_REGEX } from '../config/regex'
import Input from '../components/inputs/Input'
import Button from '../components/buttons/Button'
import axios from 'axios'
import { BASE_URL } from '../config/urls'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/user/userSlice'
import { User } from '../features/user/userSlice'



export default function SignInRouter() {
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
 

    const handleSignIn = async () => {
        try {
                const response = await axios.get(BASE_URL,{data: {username, password}});
                const user : User = response.data;
                dispatch(setUser(user))
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full text-lg' action="" onSubmit={e => e.preventDefault()}>
                <h1 className='font-bold text-4xl'><Link to='/'>Blog</Link></h1>
                <h2 className='mr-auto font-bold text-lg'>Sign-In</h2>
                <label htmlFor="username">Username:</label>
                <Input id='username' required autoComplete='off' value={username} onChange={e => setUsername(e.target.value)} autoFocus />
                <label htmlFor="password">Password:</label>
                <Input id='password' required autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} />
                <Button className='m-3' onClick={e => handleSignIn()}>
                    Sign Up
                </Button>
            </form>
        </main>
    )
}
