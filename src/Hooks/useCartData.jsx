import { useQuery } from "react-query";
import Loader from "../Components/Loader";
import useAxiosSecure from "./useAxiosSecure";
import useUserData from "./useUserData";

const useCartData = () => {
    const axiosSecure = useAxiosSecure();
    const { userData } = useUserData();

    const { data: cartData , isLoading, refetch } = useQuery({
        queryKey: [userData],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-cart/${userData._id}`)
            return res.data;
        }
    })


    if (isLoading) return <Loader />

    return {cartData, refetch}
};

export default useCartData;