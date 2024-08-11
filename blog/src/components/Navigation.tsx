import React, { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks.ts'
import SearchBar from './SearchBar.tsx'
import { logOut } from '../features/user/userSlice.ts'

interface Props {
    keyword: string,
    setKeyword: Dispatch<SetStateAction<string>>
}

export default function Navigation({ keyword, setKeyword }: Props) {
    const location = useLocation()
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const dispatch = useAppDispatch();


    return (
        <nav className='flex space-x-0 bg-[#333] text-white p-3 text-base '>
            {location.pathname === '/' && <SearchBar keyword={keyword} setKeyword={setKeyword} />}
            <ul className={'flex justify-evenly list-none flex-grow'}>
                <li className='m-4'><Link to={"/"}>Home</Link></li>
                <li className='m-4'><Link to={"/about"}>About</Link></li>
                {isLoggedIn && <li className='m-4'><Link to={"/post"}>New Post</Link></li>}
                {!isLoggedIn && <li className='m-4'><Link to={"/sign-up"}>Sign Up</Link></li>}
                {!isLoggedIn && <li className='m-4'><Link to={"/sign-in"}>Sign In</Link></li>}
                {isLoggedIn && <li className='m-4'><a className='cursor-pointer' onClick={e => dispatch(logOut())}>Log Out</a></li>}
            </ul>
        </nav>
    )
}