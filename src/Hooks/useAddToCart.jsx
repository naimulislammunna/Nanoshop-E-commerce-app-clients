import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useCartData from "./useCartData";

const useAddToCart = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {refetch} = useCartData();

    const handleMyCart = async (id) => {
        const doc = {
            userEmail: user.email,
            productId: id
        }
        const res = await axiosSecure.patch(`/update-cart`, doc);

        if (res.data.modifiedCount) {
            toast.success("Added to Cart");
            refetch();
        }
    }
    return {handleMyCart}
};

export default useAddToCart;