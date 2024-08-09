import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks.ts";
import useWindowSize from "../hooks/useWindowSize.ts";
import ThemeToggleButton from "./ThemeToggleButton.tsx";


export default function Header() {
    const sizes = useWindowSize()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
    const username = useAppSelector(state => state.user.username)

    return (
        <header className='flex justify-between items-center bg-[#66d8f5] text-3xl p-6 w-full dark:bg-dark-blue'>
            <a href="" onClick={e => { e.preventDefault(); navigate('/') }}>
                <h1>Blog</h1>
            </a>
            {isLoggedIn && <p className="text-2xl">Welcome {username}!</p>}
            <div className='flex w-1/3 justify-around items-center'>
                <ThemeToggleButton />
                {sizes?.width ? sizes?.width < 768 ? <FaMobileAlt /> :
                    sizes?.width < 992 ? <FaTabletAlt /> :
                        <FaLaptop /> : <FaLaptop />}
            </div>
        </header>
    )
}
