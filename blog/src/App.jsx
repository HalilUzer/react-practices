import {Provider} from "react-redux";
import store from "./app/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useEffect, useState} from "react";
import HomeRouter from "./routes/HomeRouter";
import ErrorRouter from "./routes/ErrorRouter";
import NewPostRouter from "./routes/NewPostRouter";
import AboutRouter from "./routes/AboutRouter";
import PostRouter from "./routes/PostRouter";
import EditPostRouter from "./routes/EditPostRouter";
import {ThemeContext} from "./contexts/ThemeContext";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeRouter/>,
        errorElement: <ErrorRouter/>
    },
    {
        path: "/post",
        element: <NewPostRouter/>
    },
    {
        path: "/about",
        element: <AboutRouter/>
    },
    {
        path: "/post/:id",
        element: <PostRouter/>
    },
    {
        path: "/edit/:id",
        element: <EditPostRouter/>
    }
])

export default function App() {

    const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('DarkMode')
        } else {
            document.body.classList.remove('DarkMode')
        }
    }, [isDark])

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </ThemeContext.Provider>
    )
}