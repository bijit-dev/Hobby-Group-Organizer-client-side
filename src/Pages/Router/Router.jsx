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
import Loader from "../../components/Loader";
import UpdateGroup from "../UpdateGroup/UpdateGroup";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
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
                loader: () => fetch('https://group-server-six.vercel.app/groups'),
                Component: AllGroups
            },
            {
                path: "/myGroup",
                loader: () => fetch('https://group-server-six.vercel.app/groups'),
                hydrateFallbackElement: <Loader/>,
                element: <PrivateRouter><MyGroup></MyGroup></PrivateRouter>
            },
            {
                path: "/updateGroup/:id",
                loader: () => fetch('https://group-server-six.vercel.app/groups'),
                hydrateFallbackElement: <Loader/>,
                element: <PrivateRouter><UpdateGroup></UpdateGroup></PrivateRouter>
            },
            {
                path: "/groupDetails/:id",
                loader: () => fetch('https://group-server-six.vercel.app/groups'),
                hydrateFallbackElement: <Loader/>,
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
