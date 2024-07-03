import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUpRouter() {

    const [user,setUser] = useState({name: '', validName: false, userFocus: false})
    const [pwd, setPwd] = useState({pwd: '', validPwd: false, pwdFocus: false})
    const [matchPwd, setMatchPwd] = useState({matchPwd: '', validMatch: false, matchFocus: false})

    
    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full' action="">
                <h1 className='mr-auto font-bold text-lg'>Sign-Up</h1>
                <label htmlFor="username" className='mr-auto'>Username:</label>
                <Input id='username' required />
                <label htmlFor="password" className='mr-auto'>Password:</label>
                <Input id='password' type='password' required />
                <label htmlFor="confirm_pwd" className='mr-auto'>Confirm Password:</label>
                <Input id='confirm_pwd' type='password' required />
                <Button className='m-3'>
                    Sign Up
                </Button>
                <p className='mr-auto'>Already Registered ?</p>
                <Link to={'/'} className='underline mr-auto'>Sign-In</Link>
            </form>
        </main>
    )
}