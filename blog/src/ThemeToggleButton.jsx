import React, {useContext, useRef} from "react";
import {ThemeContext} from "./contexts/ThemeContext";

export default function ThemeToggleButton() {

    const themeContext = useRef(useContext(ThemeContext))


    return (<div className="HeaderToggleContainer">
        <input type="checkbox" id="theme" className="HeaderToggle" onClick={e => themeContext.current.theme === 'light' ? themeContext.current.theme = 'dark' : null}/>
        <label htmlFor="theme" className="HeaderToggleLabel">Dark Mode</label>
    </div>)
}