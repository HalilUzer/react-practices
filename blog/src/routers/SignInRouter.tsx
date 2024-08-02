import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../features/user/userSlice'
import { User } from '../features/user/userSlice'
import { useAppDispatch } from '../hooks/reduxHooks'
import Input from '../components/inputs/Input'
import Button from '../components/buttons/Button'
import axios from '../config/axios'

export default function SignInRouter() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    const handleSignIn = async () => {
        try {
            const response = await axios.get(`/users?username=${username}&password=${password}`, { data: { username, password } });
            const user: User = response.data[0];
            dispatch(setUser(user))
            navigate('/');
        }
        catch (e) {
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
                <Input id='password' required autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} type='password' />
                <Button className='m-3' onClick={e => handleSignIn()}>
                    Sign In
                </Button>
            </form>
        </main>
    )
}
