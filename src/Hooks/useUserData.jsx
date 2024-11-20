import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import Loader from "../Components/Loader";

const useUserData = () => {
    const axiosPublic = useAxiosPublic();
    // const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();

    const {data: userData, isLoading} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/user?email=${user?.email}`);
            return res.data;
        }
    })
    
    
    console.log('user data', userData, isLoading);

    if(loading || isLoading) return <Loader/>
    return {userData, isLoading};
};

export default useUserData;