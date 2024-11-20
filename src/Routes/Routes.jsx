import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Banner from "../Pages/Home/Banner";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import SellerDashboardLayout from "../Layout/sellerDashboardLayout";
import Overview from "../Pages/SellerDashboard/Overview";
import AddProducts from "../Pages/SellerDashboard/AddProducts";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";
import ProductDetails from "../Pages/Products/ProductDetails";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import MyProducts from "../Pages/SellerDashboard/MyProducts";
const axiosPublic = useAxiosPublic();
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                index: true,
                element: <Banner />
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
                path: '/products',
                element: <Products />
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:4000/all-products/${params.id}`)
            }
        ]
    },
    {
        path: '/seller-dashboard',
        element: <SellerRoutes><SellerDashboardLayout /></SellerRoutes>,
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
        ]
    }
])

export default router;