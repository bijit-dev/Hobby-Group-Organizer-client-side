import { Link, NavLink, useNavigate } from 'react-router';
import logo from '/public/assets/logo.png'
import { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const Navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser().then(() => {
            // Sign-out successful.
            Navigate("/login");
            Swal.fire({
                title: "Log Out successfully!",
                icon: "success",
                draggable: true
            });

        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: errorMessage,
                icon: "error",
                draggable: true
            });

        });
    }
    const lists = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>Home</NavLink></li>
        <li><NavLink to="/groups" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>All Groups</NavLink></li>

        {/* privet router */}
        <li><NavLink to="/createGroup" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>Create Group</NavLink></li>
        <li><NavLink to="/myGroups" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>MyGroup</NavLink></li>
    </>


    // theme 
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const hendleThems = (e) => {
        if (e.target.checked) {
            setTheme("dark");
            document.querySelector("html").setAttribute("data-theme", "dark");
        }
        else {
            setTheme("light");
            document.querySelector("html").setAttribute("data-theme", "light");
        }
    }
    // set theme in local storage    
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    return (
        <nav className="navbar sticky top-0 z-20 bg-base-100/80 shadow-sm container mx-auto px-4">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl "><img className='w-14 font-bold' src={logo} alt="logo" />HGB</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {lists}
                        {
                            user ? <>
                                <Link to="/profile">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img title={user.displayName} src={user.photoURL} />
                                        </div>
                                    </div>
                                </Link>
                                <button onClick={handleSignOut} className='btn btn-primary hover:btn-error rounded-lg'>Log Out</button>
                            </> : <>

                                <NavLink to="/login" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg " : "text-lg"}>Login</NavLink>
                                <NavLink to="/register" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg" : "text-lg"}>Register</NavLink>
                            </>
                        }
                    </ul>
                </div>
                <div className='hidden lg:flex gap-3 items-center'>


                    <label onClick={hendleThems} className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />
                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ?
                        <>
                            <Link to="/profile">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img title={user.displayName} src={user.photoURL} />
                                    </div>
                                </div>
                            </Link>
                            <button onClick={handleSignOut} className='btn btn-primary hover:btn-error rounded-lg'>Log Out</button>
                        </> :
                        <NavLink to="/login" className={({ isActive }) => isActive ? "active btn btn-success rounded-lg" : "btn btn-primary hover:btn-success rounded-lg"}>LOGIN</NavLink>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;