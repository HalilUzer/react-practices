import React from 'react'
import { Link } from 'react-router-dom'
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'

export default function SignUpRouter() {
    return (
        <main className='flex justify-center items-center w-full h-full dark:black dark:text-white'>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600' action="">
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
