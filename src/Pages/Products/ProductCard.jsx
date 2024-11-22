import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const ProductCard = ({item}) => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const handleWishlist= async(id)=>{
        const doc={
            userEmail: user.email,
            productId: id
        }
        const res = await axiosSecure.patch(`/update-wishlist`, doc);
        console.log(res.data);
        
        if(res.data.modifiedCount){
            toast.success("Add to Wishlish")
        }

    }
    return (
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
            <div className="relative flex h-48 w-full justify-center lg:h-[150px]">
                <img  className="rounded-lg bg-black/40 object-cover" src={item.img} alt="card navigate ui" />
            </div>
            <div className="space-y-1">
                <h6 className="text-sm md:text-base lg:text-sm font-bold">{item.title}</h6>
                <p className="text-xs text-gray-400 md:text-sm">Brand: {item.brand}</p>
                <p className="text-xs text-gray-400 md:text-sm">Category: {item.category}</p>
                <p className="text-sm font-semibold text-red-700">$ {item.price}</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-sm md:text-base">
                <button onClick={()=>handleWishlist(item._id)} className="rounded-lg text-sm border border-sky-900 px-2 py-1  font-semibold duration-300 hover:scale-95 hover:bg-sky-800">Wishlist</button>
                <Link to={`/products/${item._id}`}><button className="rounded-lg text-sm bg-sky-900 px-5 py-1 font-semibold text-white duration-300 hover:scale-95 hover:bg-sky-800">Details</button></Link>
            </div>
        </div>
    );
};

export default ProductCard;