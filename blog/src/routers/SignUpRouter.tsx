import React, { useEffect, useRef, useState, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTimes, FaCheck } from "react-icons/fa";
import { USER_REGEX, PWD_REGEX } from '../config/regex.ts';
import { NewUser } from '../features/user/userSlice.ts';
import { BASE_URL } from '../config/urls.ts';
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'
import InputInfo from '../components/InputInfo.tsx';
import PwdAllowedSpecialCharacters from '../components/PwdAllowedSpecialCharacters.tsx';
import axios from '../config/axios.ts';



export default function SignUpRouter() {
    const userRef = useRef<HTMLInputElement>(null)
    const errRef = useRef(null)

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [validUsername, setValidUsername] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

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

    const handleSignUp = async (e: MouseEvent<HTMLButtonElement>, newUser: NewUser) => {
        e.preventDefault()
        try {
            const v1 = USER_REGEX.test(username)
            const v2 = PWD_REGEX.test(pwd)
            if (!v1 || !v2) {
                setErrMsg('Invalid entry')
            }
            const response = await axios.post('/users', { ...newUser })
            console.log(response)
            setSuccess(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            {
                success ?
                    <section className='flex flex-col justify-center items-center bg-light-blue w-32 h-32'>
                        <h1>Success!</h1>
                        <p>
                            <Button><a href="#" onClick={() => navigate('/')}>Go to Home</a></Button>
                        </p>
                    </section>
                    :
                    <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full text-lg' action="" onSubmit={e => e.preventDefault()}>
                        <h1 className='font-bold text-4xl'><Link to='/'>Blog</Link></h1>
                        <h2 className='mr-auto font-bold text-lg'>Sign-Up</h2>
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
                        <Button className='m-3' disabled={!validMatch || !validPwd || !validUsername} onClick={e => handleSignUp(e, { username, password: pwd })}>
                            Sign Up
                        </Button>
                        <p className='mr-auto'>Already Registered ?</p>
                        <Link to={'/'} className='underline mr-auto'>Sign-In</Link>
                    </form>
            }
        </main>
    )
}