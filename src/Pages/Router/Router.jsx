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
import GroupDetails from "../GroupDetails/GroupDetails";


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
                path: "/createGroup",
                element: <PrivateRouter><CreateGroup></CreateGroup></PrivateRouter>
            },
            {
                path: "/allGroups",
                loader: () => fetch('http://localhost:3000/groups'),
                Component: AllGroups
            },
            {
                path: "/myGroup",
                loader: () => fetch('http://localhost:3000/groups'),
                element: <PrivateRouter><MyGroup></MyGroup></PrivateRouter>
            },
            {
                path: "/groupDetails/:id",
                element: <PrivateRouter><GroupDetails></GroupDetails></PrivateRouter>
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
