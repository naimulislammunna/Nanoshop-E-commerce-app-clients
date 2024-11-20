import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SellerDashboard/SideBar";

const SellerDashboardLayout = () => {
    return (
        <div className="flex grid-cols-12 gap-5 min-h-screen h-full">
            <div className="col-span-4 bg-gray-200">
                <SideBar/>
            </div>
            <div className="flex-1">
                <Outlet/>
            </div>
        </div>
    );
};

export default SellerDashboardLayout;