import { Outlet } from "react-router-dom";
import AdminSidebar from "../Pages/AdminDashboard/AdminSidebar";

const AdminDashboardLayout = () => {
    return (
        <div className="flex grid-cols-12 gap-5 min-h-screen h-full">
            <div className="col-span-4 bg-gray-200">
                <AdminSidebar/>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;