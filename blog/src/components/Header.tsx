import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize.ts";
import ThemeToggleButton from "./ThemeToggleButton.tsx";

export default function Header() {
    const sizes = useWindowSize()
    const navigate = useNavigate()

    return (
        <header className='flex justify-between items-center bg-[#66d8f5] text-3xl p-6 w-full dark:bg-dark-blue'>
            <a href="" onClick={e => { e.preventDefault(); navigate('/') }}>
                <h1>React.Js Blog</h1>
            </a>
            <div className='flex w-1/3 justify-around items-center'>
                <ThemeToggleButton />
                {sizes?.width ? sizes?.width < 768 ? <FaMobileAlt /> :
                    sizes?.width < 992 ? <FaTabletAlt /> :
                        <FaLaptop /> : <FaLaptop />}
            </div>
        </header>
    )
}
