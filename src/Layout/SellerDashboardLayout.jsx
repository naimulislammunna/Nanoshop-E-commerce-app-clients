import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SellerDashboard/SideBar";

const SellerDashboardLayout = () => {
    return (
        <div>
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="w-full flex grid-cols-12  gap-5 min-h-screen h-full">
                {/* Navbar */}
                <div className="col-span-4 bg-gray-200">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <SideBar/>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <div className="flex-1">
                <Outlet/>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <SideBar/>
                </ul>
            </div>
        </div>

    );
};

export default SellerDashboardLayout;