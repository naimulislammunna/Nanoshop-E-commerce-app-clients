import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SellerDashboard/SideBar";

const SellerDashboardLayout = () => {
    return (
        <div className="flex grid-cols-12 gap-5 h-screen container py-10">
            <div className="col-span-4 bg-gray-400">
                <SideBar/>
            </div>
            <div className="col-span-8">
                <Outlet/>
            </div>
        </div>
    );
};

export default SellerDashboardLayout;