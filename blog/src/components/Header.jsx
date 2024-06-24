import useWindowSize from "../hooks/useWindowSize.js";
import ThemeToggleButton from "./ThemeToggleButton.jsx";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const { width } = useWindowSize()
    const navigate = useNavigate()


    return (
        <header className='flex justify-between items-center bg-[#66d8f5] text-3xl p-6 w-full dark:bg-dark-blue'>
            <a href="" onClick={e => { e.preventDefault(); navigate('/') }}>
                <h1>React.Js Blog</h1>
            </a>
            <div className='flex w-1/3 justify-around items-center'>
                <ThemeToggleButton />
                {width < 768 ? <FaMobileAlt /> :
                    width < 992 ? <FaTabletAlt /> :
                        <FaLaptop />}
            </div>
        </header>
    )
}
