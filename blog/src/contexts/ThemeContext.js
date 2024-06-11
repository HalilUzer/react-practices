import {createContext} from "react";

const themeContext = createContext({theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light', toggleTheme: () => {}})
export default themeContext;