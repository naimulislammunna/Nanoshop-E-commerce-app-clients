import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="p-10">
            <h1 className="text-xl font-semibold text-sky-900">Seller Dashboard</h1>
            <div className="flex flex-col gap-4 my-4">
                <NavLink><button className="btn bg-sky-800 btn-primary text-white">Overview</button></NavLink>
                <NavLink to='add-products'><button className="btn bg-sky-800 btn-primary text-white">Add Products</button></NavLink>
                <NavLink to='my-products'><button className="btn bg-sky-800 btn-primary text-white">My Products</button></NavLink>
                <NavLink to='/'><button className="btn bg-sky-800 btn-primary text-white">Home</button></NavLink>
            </div>
        </div>
    );
};

export default SideBar;