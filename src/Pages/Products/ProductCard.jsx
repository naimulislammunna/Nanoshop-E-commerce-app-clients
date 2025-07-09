import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useUserData from "../../Hooks/useUserData";
import useAddToCart from "../../Hooks/useAddToCart";

const ProductCard = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { userData } = useUserData();
    const {handleMyCart} = useAddToCart();
   

    return (
        <Link to={`/products/${item._id}`}>
            <div className="w-full lg:max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg border border-secondary hover:border-[1px] hover:border-primary cursor-pointer">
                <div className="relative flex h-48 w-full justify-center lg:h-[150px]">
                    <img className="rounded-lg object-cover" src={item.img} alt="card navigate ui" />
                </div>
                <div className="space-y-1">
                    <h6 className="text-sm md:text-base lg:text-sm font-bold">{item.title}</h6>
                    <p className="text-xs text-gray-400 md:text-sm">Brand: {item.brand}</p>
                    <p className="text-xs text-gray-400 md:text-sm">Category: {item.category}</p>
                    <p className="text-sm font-semibold text-red-700">$ {item.price}</p>
                </div>
                <div className="flex items-center justify-between gap-1 text-sm md:text-base">
                    {
                        user?.email ? <Link to={`/buynow/${item._id}`}><button className="text-xs text-white font-semibold px-5 py-2 rounded-md bg-[#33C27A]">Buy Now</button></Link> : <Link to='/sign-in'><button className="text-xs text-white font-semibold px-5 py-2 rounded-md bg-[#33C27A]">Buy Now</button> </Link>
                    }
                    <Link><button onClick={() => handleMyCart(item._id)} className="text-xs text-[#33C27A] font-semibold px-5 py-2 rounded-md bg-white border border-[#33C27A] hover:text-black">Add to Cart</button></Link>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;