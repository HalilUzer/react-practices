import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./app/store";
import ErrorRouter from "./routes/ErrorRouter";
import NewPostRouter from "./routes/NewPostRouter";
import AboutRouter from "./routes/AboutRouter";
import HomeRouter from './routes/HomeRouter';
import './index.css';
import PostRouter from './routes/PostRouter';
import EditPostRouter from "./routes/EditPostRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);