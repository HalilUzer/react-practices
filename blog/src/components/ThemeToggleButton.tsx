import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.ts";

export default function ThemeToggleButton() {
    const themeContext = useContext(ThemeContext)

    return (
        <div>
            <input type="checkbox" id="theme" className="peer h-0 w-0 hidden"
                onClick={e => themeContext.setIsDark(!themeContext.isDark)} value={themeContext.isDark.toString()} />
            <label htmlFor="theme" className="flex relative before:bg-white before:w-20 h-8 before:cursor-pointer before:rounded-3xl before:justify-start before:items-center before:dark:bg-black
            after:absolute after:w-5 after:h-5 after:bg-black after:rounded-3xl after:left-1.5 after:top-1.5 after:dark:bg-white
            peer-checked:after:translate-x-12 after:transition-all"></label>
        </div>)
}