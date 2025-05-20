import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../Register/Register";
import Login from "../Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            },
            // {
            //     path: "/profile",
            //     element: <PrivateRouter><Profile></Profile></PrivateRouter>
            // },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);
