import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useUserData from "./useUserData";

const useOrderData = () => {

    const axiosSecure = useAxiosSecure();
    const { userData } = useUserData();

    const { data: orderData = [], isLoading} = useQuery({
        queryKey: [userData],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-Order/${userData._id}`)
            return res.data;
        }
    })

    return {orderData, isLoading}
};

export default useOrderData;