import React, { useEffect, useRef, useState, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaCheck } from "react-icons/fa";
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'
import InputInfo from '../components/InputInfo.tsx';
import PwdAllowedSpecialCharacters from '../components/PwdAllowedSpecialCharacters.tsx';
import { NewUser, useRegisterUserMutation } from '../features/users/userApi.ts';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUpRouter() {
    const userRef = useRef<HTMLInputElement>(null)
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

    const [registerUser] = useRegisterUserMutation();

    userRef.current?.focus()



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




    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>, newUser: NewUser) => {
        e.preventDefault()
        try {
            const payload = await registerUser(newUser).unwrap()
            console.log(payload)
        }
        catch (err) {

        }
    }

    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full text-lg' action="" onSubmit={e => e.preventDefault()}>
                <h1 className='mr-auto font-bold text-lg'>Sign-Up</h1>
                <p ref={errRef}>{errMsg}</p>
                <label htmlFor="username" className='mr-auto'>
                    Username: {username.length === 0 ? null : validUsername ?
                        <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                </label>
                <Input id='username' required autoComplete='off' value={username} ref={userRef} onChange={e => setUsername(e.target.value)} autoFocus />
                <InputInfo condition={username.length !== 0 && !validUsername} >
                    4 to 24 characters. <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscores, hyphens allowed.
                </InputInfo>
                <label htmlFor="password" className='mr-auto'>
                    Password: {pwd.length === 0 ? null : validPwd ?
                        <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                </label>
                <Input id='password' type='password' required value={pwd} onChange={e => setPwd(e.target.value)} />
                <InputInfo condition={pwd.length !== 0 && !validPwd}>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <PwdAllowedSpecialCharacters />
                </InputInfo>
                <label htmlFor="confirm_pwd" className='mr-auto'>
                    Confirm Password:{matchPwd.length === 0 ? null : validMatch ?
                        <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                </label>
                <Input id='confirm_pwd' type='password' required value={matchPwd} onChange={e => setMatchPwd(e.target.value)} />
                <InputInfo condition={matchFocus && !validMatch}>
                    Must match the first password input field.
                </InputInfo>
                <Button className='m-3' disabled={!validMatch || !validPwd || !validUsername} onClick={e => handleSubmit(e, { username, password: pwd })}>
                    Sign Up
                </Button>
                <p className='mr-auto'>Already Registered ?</p>
                <Link to={'/'} className='underline mr-auto'>Sign-In</Link>
            </form>
        </main>
    )
}