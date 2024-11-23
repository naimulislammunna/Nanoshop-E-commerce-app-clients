import useAuth from '../Hooks/useAuth';
import useUserData from '../Hooks/useUserData';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader';

const BuyerRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const {userData} = useUserData();

    const location = useLocation();
    if(loading || !userData?.role) return <Loader/>
    if(user && userData?.role === 'buyer'){
        return children;
    }
    return <Navigate to='/' state={location?.pathname} replace></Navigate>
};

export default BuyerRoutes;