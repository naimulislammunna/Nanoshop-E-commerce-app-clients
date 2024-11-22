// import { useContext } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
// import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
    const {user} = useAuth();
    // const { data } = useAdmin();
    
    const navigate = useNavigate();
    const { userlogOut} = useContext(AuthContext);
    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                toast.success('Log Out')
                navigate('/')
            })
    }


    const items = <>
        <NavLink to='/'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-mySky">Home</button></NavLink>
        <NavLink to='/products'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-mySky">Products</button></NavLink>
    </>
    return (
        <div className="bg-white flex">
            <div className="navbar container flex justify-between">
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <div className="flex ml-5 lg:ml-0 text-center">
                        <Link to='/'>
                            <a className="logo text-3xl text-sky-900 ">Nano<span className="text-myBlue logo">Shop</span></a>
                            <p className="text-myBlue text-center font-semibold">E-commerce Solution</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {items}
                    </ul>
                </div>
                <div className="flex-none">
                    {
                        user?.displayName || <Link to='/register'>
                            <button className="button">Register</button>
                        </Link>
                    }

                    {user?.email && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user?.photoURL} />

                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className="mt-3 ">
                                <span className="text-myBlue text-sm hover:bg-white">{user?.email}</span>
                            </li>
                            <li><Link to='/user-dashboard'>User Dashboard</Link></li>
                            <li><Link to='/seller-dashboard'>Seller Dashboard</Link></li>
                            <li><Link to='/admin-dashboard'>Admin Dashboard</Link></li>
                            <li>{user && <button className="px-4 py-2 rounded-full" onClick={handleLogOut} >Sign Out</button>}</li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navber;