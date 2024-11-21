import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import useUserData from "../Hooks/useUserData";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const {userData, isLoading} = useUserData();
console.log('seller', userData, isLoading);

    const location = useLocation();
    if(loading || !userData?.role) return <Loader/>
    if(user && userData?.role === 'admin'){
        return children;
    }
    return <Navigate to='/' state={location?.pathname} replace></Navigate>
};

export default AdminRoutes;