import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/react.svg'
import { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const Navigate = useNavigate();
    

    const handleSignOut = () => {
        signOutUser().then(() => {
            // Sign-out successful.
            Navigate("/login");

        }).catch((error) => {
            // An error happened.
            console.log(error);

        });
    }


    const lists = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>Home</NavLink></li>
        <li><NavLink to="/allGroups" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>All Groups</NavLink></li>
        <li><NavLink to="/createGroup" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>Create Group</NavLink></li>

        {/* privet router */}
        <li><NavLink to="/myGroup" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg font-bold" : "text-lg font-medium"}>MyGroup</NavLink></li>
    </>

    return (
        <nav className="navbar sticky top-0 z-20 bg-base-100/80 shadow-sm container mx-auto px-4">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl"><img className='w-14 font-bold' src={logo} alt="logo" />HGB</a>
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
                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg " : "text-lg"}>Login</NavLink>
                        <NavLink to="/register" className={({ isActive }) => isActive ? "text-[#0EA106] underline text-lg" : "text-lg"}>Register</NavLink>
                    </ul>
                </div>
                <div className='hidden lg:flex gap-3 items-center'>

                    {user ?
                        <>
                            <Link to="/profile">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img title={user.displayName} src={user.photoURL} />
                                    </div>
                                </div>
                            </Link>
                            <button onClick={handleSignOut} className='btn btn-primary hover:btn-success rounded-lg'>Log Out</button>
                        </> :
                            <NavLink to="/login" className={({ isActive }) => isActive ? "active btn btn-success rounded-lg" : "btn btn-primary hover:btn-success rounded-lg"}>LOGIN</NavLink>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;