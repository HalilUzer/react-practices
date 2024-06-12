import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ keyword, setKeyword, type = '' }) {

    return (
        <nav className='flex space-x-0 bg-[#333] text-white'>
            {type === 'search' && <form action="">
                <label htmlFor="searchBar">Search Bar</label>
                <input type="text" id="searchBar" placeholder='Search Posts' onChange={e => setKeyword(e.target.value)}
                    value={keyword} />

            </form>}
            <ul className={'flex justify-evenly list-none flex-grow text-2xl'}>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link to={"/"}>Home</Link></li>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link to={"/post"}>Posts</Link></li>
                <li className={'m-4 shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px] hover:shadow-[rgba(0, 0, 0, 0.06)_0_2px_4px transition-all'}><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    )
}