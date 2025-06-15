// import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

// import useAdmin from "../../Hooks/useAdmin";


const Navber = () => {
    const { user } = useAuth();
    // const { data } = useAdmin();

    const navigate = useNavigate();
    const { userlogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        userlogOut()
            .then(() => {
                toast.success('Log Out')
                navigate('/')
            })
    }


    const items = <>
        <NavLink to='/'><button className="text-white text-base font-semibold hover:border-b-2 hover:border-white">Home</button></NavLink>
        <NavLink to='/all-products'><button className="text-white text-base font-semibold hover:border-b-2 hover:border-white">Products</button></NavLink>
        <NavLink to='/about'><button className="text-white text-base font-semibold hover:border-b-2 hover:border-white">About Us</button></NavLink>
        <NavLink to='/contact'><button className="text-white text-base font-semibold hover:border-b-2 hover:border-white">Contact Us</button></NavLink>
    </>
    return (
        <div className="bg-black text-white flex">
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
                            <a className="logo text-2xl text-primary ">Nano<span className="text-white logo">Shop</span></a>
                            <p className="text-white text-sm text-center font-semibold">E-commerce Solution</p>
                        </Link>
                    </div>
                </div>

                <div>
                    <form action="" className="bg-white p-1 rounded-lg flex ">
                        <input className="w-64 rounded-lg bg-transparent px-4 py-1 text-black focus:outline-none" placeholder="Search" type="text"/>
                        <button type="submit" className="p-2 rounded-lg bg-primary text-xl text-white lg:ml-2 my-auto"><IoMdSearch /></button>
                    </form>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {items}
                    </ul>
                </div>
                <div className="flex-none">
                    <Link to="/cart">
                        <div className="relative mx-10 w-fit">
                            <FaCartShopping className="text-3xl" />
                            <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">2</span>
                        </div>
                    </Link>
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