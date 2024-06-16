export default function SearchBar({ keyword, setKeyword }) {
    return (
        <form action="" className='flex align-center ml-4'>
            <label htmlFor="searchBar" className='absolute left-full'>Search Bar</label>
            <input className='text-base outline-none' type="text" id="searchBar" placeholder='Search Posts' onChange={e => setKeyword(e.target.value)}
                value={keyword} />
        </form>
    )
}
