import {Provider} from "react-redux";
import store from "./app/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useEffect, useState} from "react";
import HomeRouter from "./routes/HomeRouter.jsx";
import ErrorRouter from "./routes/ErrorRouter.jsx";
import NewPostRouter from "./routes/NewPostRouter.jsx";
import AboutRouter from "./routes/AboutRouter.jsx";
import PostRouter from "./routes/PostRouter.jsx";
import EditPostRouter from "./routes/EditPostRouter.jsx";
import {ThemeContext} from "./context/ThemeContext.js";


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
            document.body.classList.add('BodyDarkMode')
        } else {
            document.body.classList.remove('BodyDarkMode')
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