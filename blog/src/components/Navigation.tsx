import { Link, useLocation } from 'react-router-dom'
import React, { Dispatch, SetStateAction } from 'react'
import SearchBar from './SearchBar.tsx'
import { useAppSelector } from '../hooks/reduxHooks.ts'

type Props = {
    keyword: string,
    setKeyword: Dispatch<SetStateAction<string>>
}

export default function Navigation({ keyword, setKeyword }: Props) {
    const location = useLocation()
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

    return (
        <nav className='flex space-x-0 bg-[#333] text-white p-3 text-base '>
            {location.pathname === '/' && <SearchBar keyword={keyword} setKeyword={setKeyword} />}
            <ul className={'flex justify-evenly list-none flex-grow'}>
                <li className='m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'><Link className='text' to={"/"}>Home</Link></li>
                <li className='m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'><Link to={"/post"}>New Post</Link></li>
                <li className='m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'><Link to={"/about"}>About</Link></li>
                {!isLoggedIn && <li className='m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'><Link to={"/sign-up"}>Sign Up</Link></li>}
                {!isLoggedIn && <li className='m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'><Link to={"/sign-in"}>Sign In</Link></li>}
            </ul>
        </nav>
    )
}