import React, { useEffect, useRef, useState, MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaTimes, FaCheck } from "react-icons/fa";
import { USER_REGEX, PWD_REGEX } from '../config/consts.ts';
import Input from './../components/inputs/Input.tsx'
import Button from '../components/buttons/Button.tsx'
import InputInfo from '../components/InputInfo.tsx';
import PwdAllowedSpecialCharacters from '../components/PwdAllowedSpecialCharacters.tsx';
import { useSignUp } from '../hooks/userHooks.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Role, User } from '../features/user/userSlice.ts';
import axios from '../config/axios.ts';

const schema = z.object({
    username: z.string().min(4).max(24).regex(USER_REGEX),
    email: z.string().email(),
    password: z.string().min(1).regex(PWD_REGEX),
    passwordConfirmation: z.string().
}).refine(data => data.password === data.passwordConfirmation, { message: 'Password dont match', path: ['confirmPassword'] })


type FormFields = z.infer<typeof schema>

export default function SignUpRouter() {
    const userRef = useRef<HTMLInputElement>(null)
    const errRef = useRef(null)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted, isValid }
    } = useForm<FormFields>(
        {
            defaultValues: {
                username: '',
                password: '',
                email: ''
            },
        })

    userRef.current?.focus()
    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        try {
            const user: User = {
                ...data,
                id: Math.ceil(Math.random() * 100).toString(),
                accessToken: Math.random().toString(36).substring(2, 7),
                roles: [Role.USER]
            }
            await axios.post<User>('/users', user)
        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            {
                isSubmitted ?
                    <section className='flex flex-col justify-center items-center bg-light-blue w-32 h-32'>
                        <h1>Success!</h1>
                        <p>
                            <Button><a href="#" onClick={() => navigate('/')}>Go to Home</a></Button>
                        </p>
                    </section>
                    :
                    <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full text-lg' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='font-bold text-4xl'><Link to='/'>Blog</Link></h1>
                        <h2 className='mr-auto font-bold text-lg'>Sign-Up</h2>
                        <p ref={errRef}>{errors.root?.message}</p>

                        <label htmlFor="username" className='mr-auto'>
                            Username: {!errors.username ?
                                <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                        </label>
                        <Input register={register} name='username' id='username' autoComplete='off' autoFocus />
                        {errors.username && <InputInfo>
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, numbers, underscores, hyphens allowed.
                        </InputInfo>}

                        <label htmlFor="password" className='mr-auto'>
                            Password: {!errors.password ?
                                <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                        </label>
                        <Input register={register} name='password' id='password' type='password' />
                        {errors.password && <InputInfo>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <PwdAllowedSpecialCharacters />
                        </InputInfo>
                        }
                        <label htmlFor="confirm_pwd" className='mr-auto'>
                            Confirm Password:{matchPwd.length === 0 ? null : validMatch ?
                                <FaCheck className='text-green-600 inline' /> : <FaTimes className='text-red-600 inline' />}
                        </label>
                        <Input id='confirm_pwd' type='password' required value={matchPwd} onChange={e => setMatchPwd(e.target.value)} />
                        <InputInfo condition={matchFocus && !validMatch}>
                            Must match the first password input field.
                        </InputInfo>

                        <Button className='m-3' disabled={isValid} type='submit'>
                            Sign Up
                        </Button>
                        <p className='mr-auto'>Already Registered ?</p>
                        <Link to={'/'} className='underline mr-auto'>Sign-In</Link>
                    </form>
            }
        </main>
    )
}