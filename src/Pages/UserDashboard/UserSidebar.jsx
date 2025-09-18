import { NavLink } from "react-router-dom";

const UserSidebar = () => {
    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold text-sky-900">User Dashboard</h1>
            <div className="w-full flex flex-col gap-4 my-4 border border-gray-300 rounded-lg p-5">
                <NavLink><button className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">My Account</button></NavLink>
                <NavLink to='order'><button className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">Order</button></NavLink>
                <NavLink to='/'><button className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">Home</button></NavLink>
            </div>
        </div>
    );
};

export default UserSidebar;