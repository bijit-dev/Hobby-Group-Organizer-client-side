import { createBrowserRouter } from "react-router";
import App from "../../App";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MyGroup from "../MyGroup/MyGroup";
import Profile from "../Profile/Profile";
import AllGroups from "../AllGroups/AllGroups";
import CreateGroup from "../CreateGroup/CreateGroup";
import PrivateRouter from "./PrivateRouter";


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
            {
                path: "/allGroups",
                Component: AllGroups
            },
            {
                path: "/createGroup",
                element: <PrivateRouter><CreateGroup></CreateGroup></PrivateRouter>
            },
            {
                path: "/myGroup",
                element: <PrivateRouter><MyGroup></MyGroup></PrivateRouter>
            },
            {
                path: "/profile",
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);
