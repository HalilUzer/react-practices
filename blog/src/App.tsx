import React, { useState } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext.ts";
import { Role } from "./features/user/userSlice.ts";
import store from "./config/reduxStore.ts";
import HomeRouter from "./routers/HomeRouter.tsx";
import ErrorRouter from "./routers/ErrorRouter.tsx";
import NewPostRouter from "./routers/NewPostRouter.tsx";
import AboutRouter from "./routers/AboutRouter.tsx";
import PostRouter from "./routers/PostRouter.tsx";
import EditPostRouter from "./routers/EditPostRouter.tsx";
import RootRouter from "./routers/RootRouter.js";
import SignUpRouter from "./routers/SignUpRouter.js";
import UnauthorizedRouter from "./routers/UnauthorizedRouter.tsx";
import SignInRouter from "./routers/SignInRouter.tsx";
import RequireAuth from "./components/RequireAuth.tsx";



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
                element:
                    <RequireAuth allowedRoles={[Role.USER]}>
                        <NewPostRouter />
                    </RequireAuth>
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
                element:
                    <RequireAuth allowedRoles={[Role.USER]}>
                        <EditPostRouter />
                    </RequireAuth>
            },
            {
                path: "/unauthorized",
                element: <UnauthorizedRouter />
            }
        ]
    },
    {
        path: "/sign-up",
        element: <SignUpRouter />
    },
    {
        path: "/sign-in",
        element: <SignInRouter />
    }

])

export default function App() {

    const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDark) {
        document.body.classList.add('dark')
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.classList.remove('dark')
        document.body.style.backgroundColor = '#efefef'
    }

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeContext.Provider>
    )
}