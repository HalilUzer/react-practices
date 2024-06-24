import { Provider } from "react-redux";
import store from "./config/reduxStore.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomeRouter from "./routers/HomeRouter.jsx";
import ErrorRouter from "./routers/ErrorRouter.jsx";
import NewPostRouter from "./routers/NewPostRouter.jsx";
import AboutRouter from "./routers/AboutRouter.jsx";
import PostRouter from "./routers/PostRouter.jsx";
import EditPostRouter from "./routers/EditPostRouter.jsx";
import { ThemeContext } from "./context/ThemeContext.js";
import RootRouter from "./routers/RootRouter.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootRouter />,
        errorElement: <ErrorRouter />,
        children: [
            {
                index: true,
                element: <HomeRouter />
            },
            {
                path: "/post",
                element: <NewPostRouter />
            },
            {
                path: "/about",
                element: <AboutRouter />
            },
            {
                path: "/post/:id",
                element: <PostRouter />
            },
            {

                path: "/edit/:id",
                element: <EditPostRouter />
            }
        ]
    },

])

export default function App() {

    const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark')
            document.body.style.backgroundColor = 'black'
        } else {
            document.body.classList.remove('dark')
            document.body.style.backgroundColor = '#efefef'
        }
    }, [isDark])

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeContext.Provider>
    )
}