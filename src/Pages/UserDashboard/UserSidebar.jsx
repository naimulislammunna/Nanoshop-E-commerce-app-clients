import { NavLink } from "react-router-dom";

const UserSidebar = () => {
    return (
        <div className="">
            <h1 className="text-xl font-semibold text-sky-900">User Dashboard</h1>
            <div className="w-full flex flex-col gap-4 my-4 border border-gray-300 rounded-lg p-5">
                <NavLink><button className="btn bg-sky-800 btn-primary text-white">My Account</button></NavLink>
                <NavLink to='my-cart'><button className="btn bg-sky-800 btn-primary text-white">My Cart</button></NavLink>
                <NavLink to='/'><button className="btn bg-sky-800 btn-primary text-white">Home</button></NavLink>
            </div>
        </div>
    );
};

export default UserSidebar;