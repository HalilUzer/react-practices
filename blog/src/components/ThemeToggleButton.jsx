import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function ThemeToggleButton() {

    const themeContext = useContext(ThemeContext)


    return (
        <div className="flex items-center">
            <input type="checkbox" id="theme" className="hidden"
                onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark} />
            <label htmlFor="theme" className="flex center size-6 cursor-pointer relative 
            before:content- before:h-3 before:w-3 before:border before:bg-white before:rounded-xl 
            after:content-after:h-[0.8rem] after:w[0.8-rem] after:bg-black after:rounded-xl">Dark Mode</label>
        </div>)
}