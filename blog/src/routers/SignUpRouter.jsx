import React from 'react'

export default function SignUpRouter() {
    return (
        <main className='flex justify-center items-center'>
            <form action="">
                <h2>Sign-In</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' required/>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' required/>
                <label htmlFor="confirm_pwd">Confirm Password:</label>
                <input type="password" id='confirm_pwd' required/>
            </form>
        </main>
    )
}
