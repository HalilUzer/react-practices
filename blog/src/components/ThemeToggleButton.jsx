import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function ThemeToggleButton() {

    const themeContext = useContext(ThemeContext)

    return (
        <div className="flex items-center justify-center">
            <input type="checkbox" id="theme" className="h-0 w-0 hidden"
                onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark} />
            <label htmlFor="theme" className="flex relative bg-white w-20 h-8 cursor-pointer rounded-3xl justify-start items-center
            after:absolute after:left-1 after:w-5 after:h-5 after:bg-black after:rounded-3xl
            before:absolute before:left-1 before:w-5 before:h-5 before:bg-black before:rounded-3xl"></label>
        </div>)
}

/*"flex center size-6 cursor-pointer relative 
            before:content-[''] before:h-3 before:w-3 before:border before:bg-white before:rounded-xl 
            after:content-[''] after:h-[0.8rem] after:w[0.8-rem] after:bg-black after:rounded-xl text-sm"*/