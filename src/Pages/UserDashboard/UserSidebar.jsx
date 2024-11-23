import { NavLink } from "react-router-dom";

const UserSidebar = () => {
    return (
        <div className="p-10">
            <h1 className="text-xl font-semibold text-sky-900">User Dashboard</h1>
            <div className="flex flex-col gap-4 my-4">
                <NavLink><button className="btn bg-sky-800 btn-primary text-white">My Wishlist</button></NavLink>
                <NavLink to='my-cart'><button className="btn bg-sky-800 btn-primary text-white">My Cart</button></NavLink>
                <NavLink to='/'><button className="btn bg-sky-800 btn-primary text-white">Home</button></NavLink>
            </div>
        </div>
    );
};

export default UserSidebar;