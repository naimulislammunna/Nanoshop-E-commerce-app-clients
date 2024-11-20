import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    
    const location = useLocation();
    if(loading) return <Loader/>
    if(user){
        return children;
    }
    return <Navigate to='/sign-in' state={location?.pathname} replace></Navigate>
};

export default PrivateRoutes;