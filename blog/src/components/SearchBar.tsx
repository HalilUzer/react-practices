import React from "react"
import { Dispatch, SetStateAction } from "react"

type props = {
    keyword: string,
    setKeyword: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ keyword, setKeyword } : props) {
    
    return (
        <form action="" className='flex align-center ml-4'>
            <label htmlFor="searchBar" className='absolute left-full'>Search Bar</label>
            <input className='text-sm outline-none text-black dark:bg-black dark:text-white' type="text" id="searchBar" placeholder='Search Posts' value={keyword} onChange={e => setKeyword(e.target.value)} />
        </form>
    )
}
