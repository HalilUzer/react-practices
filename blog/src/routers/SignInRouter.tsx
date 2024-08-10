import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Role, setUser, User } from '../features/user/userSlice'
import { useAppDispatch } from '../hooks/reduxHooks'
import Input from '../components/inputs/Input'
import axios from '../config/axios'
import Button from '../components/buttons/Button'


const schema = z.object({
    username: z.string().min(1),
    password: z.string().min(1)
})

type FormState = z.infer<typeof schema>

export default function SignInRouter() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { isSubmitted }
    } = useForm<FormState>({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FormState> = async (inputs) => {
        try {
            const response = await axios.get(`/users?username=${inputs.username}&password=${inputs.password}`,
                {
                    data: {
                        username: inputs.username,
                        password: inputs.password
                    }
                });
            const data = response.data[0];
            const roles: Role[] = [];
            data.roles.forEach((role: string) => roles.push(Role[role as keyof typeof Role]))
            const user: User = { ...data, roles };
            dispatch(setUser(user))
            navigate('/');
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <main className='flex justify-center items-center min-h-[100vh] w-full max-w-[300px] dark:black dark:text-white m-auto'>
            <form className='flex flex-col justify-center items-center p-5 bg-light-blue dark:bg-gray-600 w-full text-lg' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='font-bold text-4xl'><Link to='/'>Blog</Link></h1>
                <h2 className='mr-auto font-bold text-lg'>Sign-In</h2>
                <label htmlFor="username">Username:</label>
                <Input register={register} name='username' id='username' autoComplete='off' autoFocus />
                <label htmlFor="password">Password:</label>
                <Input register={register} name='password' id='password' autoComplete='off' type='password' />
                <Button className='m-3' type='submit'>
                    Sign In
                </Button>
            </form>
        </main>
    )
}
