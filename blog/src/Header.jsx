import React from 'react'
import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";
import './index.css'
import useWindowSize from "./hooks/useWindowSize";

export default function Header() {

    const {width} = useWindowSize()

    return (
        <header className='Header'>
            <h1>React.Js Blog</h1>
            {width < 768 ? <FaMobileAlt/> :
                width < 992 ? <FaTabletAlt/> :
                    <FaLaptop/>}

        </header>
    )
}
