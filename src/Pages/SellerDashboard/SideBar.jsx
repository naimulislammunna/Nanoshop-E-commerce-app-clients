import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div>
            <h1>Seller Dashboard</h1>
            <div className="flex flex-col gap-4">
                <NavLink><button className="btn btn-primary">Overview</button></NavLink>
                <NavLink to='add-products'><button className="btn btn-primary">Add Products</button></NavLink>
                <NavLink to='/'><button className="btn btn-primary">Home</button></NavLink>
            </div>
        </div>
    );
};

export default SideBar;