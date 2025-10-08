import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useCartData from "./useCartData";

const useAddToCart = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {refetch} = useCartData();

    const handleMyCart = async (id, img, title, price, ram, storage, color, quantity) => {
        const doc = {
            userEmail: user.email,
            productId: id,
            img,
            title,
            price,
            ram,
            storage,
            color,
            quantity
        }
        const res = await axiosSecure.patch(`/update-cart`, doc);

        if (res.data.success == true) {
            toast.success(res.data.message);
            refetch();
        }
        else {
            toast.error(res.data.message);
        }
    }
    return {handleMyCart}
};

export default useAddToCart;