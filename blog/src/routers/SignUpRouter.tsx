import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUpRouter() {
    const userRef = useRef(null)
    const errRef = useRef(null)

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd))
        setValidMatch(pwd === matchPwd)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [username, pwd, matchPwd])




    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            <h1 className='mr-auto font-bold text-lg'>Sign-Up</h1>
            <p ref={errRef}>{errMsg}</p>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full' action="">
                <label htmlFor="username" className='mr-auto'>Username:</label>
                <Input id='username' required autoComplete='off' value={username} ref={userRef} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="password" className='mr-auto'>Password:</label>
                <Input id='password' type='password' required value={pwd} onChange={e => setPwd(e.target.value)} />
                <label htmlFor="confirm_pwd" className='mr-auto'>Confirm Password:</label>
                <Input id='confirm_pwd' type='password' required value={matchPwd} onChange={e => setMatchPwd(e.target.value)} />
                <Button className='m-3'>
                    Sign Up
                </Button>
                <p className='mr-auto'>Already Registered ?</p>
                <Link to={'/'} className='underline mr-auto'>Sign-In</Link>
            </form>
        </main>
    )
}