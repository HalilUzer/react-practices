import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({keyword, setKeyword, type = ''}) {

    return (
        <nav className='flex space-x-0 bg-[#333] '>
            {type === 'search' && <form action="">
                <label htmlFor="searchBar">Search Bar</label>
                <input type="text" id="searchBar" placeholder='Search Posts' onChange={e => setKeyword(e.target.value)}
                       value={keyword}/>
            </form>}
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/post"}>Posts</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    )
}