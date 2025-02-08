import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import SellerDashboardLayout from "../Layout/sellerDashboardLayout";
import Overview from "../Pages/SellerDashboard/Overview";
import AddProducts from "../Pages/SellerDashboard/AddProducts";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";
import ProductDetails from "../Pages/Products/ProductDetails";
import MyProducts from "../Pages/SellerDashboard/MyProducts";
import AdminRoutes from "./AdminRoutes";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import UpdateProducts from "../Pages/SellerDashboard/UpdateProducts";
import HomeLayout from "../Layout/HomeLayout";
import UserDashboard from "../Layout/UserDashboard";
import Wishlist from "../Pages/UserDashboard/Wishlist";
import MyCart from "../Pages/UserDashboard/MyCart";
import BuyerRoutes from "./BuyerRoutes";
import About from "../AboutUs/About";
import ContactUs from "../Contacts/ContactUs";
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:id',
                element: <PrivateRoutes><ProductDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://nano-shop-server.vercel.app/all-products/${params.id}`)
            }
        ]
    },
    {
        path: '/user-dashboard',
        element: <PrivateRoutes><BuyerRoutes><UserDashboard/></BuyerRoutes></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <Wishlist/>
            },
            {
                path: 'my-cart',
                element: <MyCart/>
            },
        ]
    },
    {
        path: '/seller-dashboard',
        element: <PrivateRoutes><SellerRoutes><SellerDashboardLayout /></SellerRoutes></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: 'add-products',
                element: <AddProducts />
            },
            {
                path: 'my-products',
                element: <MyProducts/>
            },
            {
                path: 'my-products/update-products/:id',
                element: <UpdateProducts/>
            },
        ]
    },
    {
        path:'/admin-dashboard',
        element: <PrivateRoutes><AdminRoutes><AdminDashboardLayout/></AdminRoutes></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <ManageUsers/>
            }
        ]
    }
])

export default router;