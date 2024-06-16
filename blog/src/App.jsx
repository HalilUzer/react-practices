import { Provider } from "react-redux";
import store from "./config/reduxStore.js";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import React, { useEffect, useState } from "react";
import HomeRouter from "./HomeRouter.jsx";
import ErrorRouter from "./ErrorRouter.jsx";
import NewPostRouter from "./NewPostRouter.jsx";
import AboutRouter from "./AboutRouter.jsx";
import PostRouter from ".s/PostRouter.jsx";
import EditPostRouter from "./EditPostRouter.jsx";
import { ThemeContext } from "./context/ThemeContext.js";
import Root from "./Root.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                element: <PostRouter />,
                children: [
                    {
                        path: "/post/:id/edit",
                        element: <EditPostRouter />
                    }
                ]
            },
            
        ]
    },

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
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeContext.Provider>
    )
}