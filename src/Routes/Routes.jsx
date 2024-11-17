import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Banner from "../Pages/Home/Banner";
import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children:[
            {
                index: true,
                element: <Banner/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/sign-in',
                element: <SignIn/>
            },
            {
                path: '/products',
                element: <Products/>
            },
        ]
    }
])

export default router;