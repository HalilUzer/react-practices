import React, {useContext, useEffect, useRef} from "react";
import {ThemeContext} from "./context/ThemeContext.js";

export default function ThemeToggleButton() {

    const themeContext = useContext(ThemeContext)


    return (
        <div className="flex items-center">
            <input type="checkbox" id="theme" className="hidden"
                   onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark}/>
            <label htmlFor="theme" className="flex center size-6 cursor-pointer relative before:content-none before:h-3 before:w-3 rounded-xl">Dark Mode</label>
        </div>)
}