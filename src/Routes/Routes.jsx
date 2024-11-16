import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Banner from "../Pages/Home/Banner";
import Register from "../Pages/Register";

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
            }
        ]
    }
])

export default router;