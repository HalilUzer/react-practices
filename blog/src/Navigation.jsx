import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Nav({ keyword, setKeyword }) {
    const location = useLocation()

    console.log(location)

    return (
        <nav className='flex space-x-0 bg-[#333] text-white p-3'>
            {location.pathname === '/' && <SearchBar keyword={keyword} setKeyword={setKeyword} />}
            <ul className={'flex justify-evenly list-none flex-grow text-2xl'}>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link className='text' to={"/"}>Home</Link></li>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link to={"/post"}>Posts</Link></li>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    )
}