import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";
import './index.css'
import useWindowSize from "./hooks/useWindowSize.js";
import ThemeToggleButton from "./ThemeToggleButton.jsx";

export default function Header() {

    const {width} = useWindowSize()

    return (
        <header className='Header'>
            <h1>React.Js Blog</h1>
            <div className='HeaderButtons'>
                <ThemeToggleButton/>
                {width < 768 ? <FaMobileAlt/> :
                    width < 992 ? <FaTabletAlt/> :
                        <FaLaptop/>}
            </div>

        </header>
    )
}
