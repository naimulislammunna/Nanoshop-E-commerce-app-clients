import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div>
            <div className="p-10">
            <h1 className="text-xl font-semibold text-sky-900">Admin Dashboard</h1>
            <div className="flex flex-col gap-4 my-4">
                <NavLink><button className="btn bg-sky-800 btn-primary text-white">Manage Users</button></NavLink>
                <NavLink to='/'><button className="btn bg-sky-800 btn-primary text-white">Home</button></NavLink>
            </div>
        </div>
        </div>
    );
};

export default AdminSidebar;