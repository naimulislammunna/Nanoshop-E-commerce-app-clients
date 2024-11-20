import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import useUserData from "../Hooks/useUserData";

const SellerRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const {userData, isLoading} = useUserData();
console.log('seller', userData, isLoading);

    const location = useLocation();
    if(loading || !userData?.role) return <Loader/>
    if(user && userData?.role === 'seller'){
        return children;
    }
    return <Navigate to='/' state={location?.pathname} replace></Navigate>
};

export default SellerRoutes;