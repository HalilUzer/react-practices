import React, {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "./context/ThemeContext.js";

export default function ThemeToggleButton() {

    const themeContext = useContext(ThemeContext)


    return (
        <div className="HeaderToggleContainer">
            <input type="checkbox" id="theme" className="HeaderToggle"
                   onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark}/>
            <label htmlFor="theme" className="HeaderToggleLabel">Dark Mode</label>
        </div>)
}