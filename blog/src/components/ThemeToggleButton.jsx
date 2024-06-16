import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export default function ThemeToggleButton() {

    const themeContext = useContext(ThemeContext)

    return (
        <div className="">
            <input type="checkbox" id="theme" className="peer h-0 w-0 hidden"
                onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark} />
            <label htmlFor="theme" className="flex relative before:bg-white before:w-20 h-8 before:cursor-pointer before:rounded-3xl before:justify-start before:items-center
            after:absolute after:w-5 after:h-5 after:bg-black after:rounded-3xl after:left-1 after:top-1.5
            peer-checked:after:translate-x-12 after:transition-all"></label>
        </div>)
}

/*"flex center size-6 cursor-pointer relative 
            before:content-[''] before:h-3 before:w-3 before:border before:bg-white before:rounded-xl 
            after:content-[''] after:h-[0.8rem] after:w[0.8-rem] after:bg-black after:rounded-xl text-sm"*/