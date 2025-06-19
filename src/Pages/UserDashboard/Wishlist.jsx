import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import Loader from "../../Components/Loader";

const Wishlist = () => {
    const axiosSecure = useAxiosSecure();
    const {userData} = useUserData();

    const {data = [], isLoading} = useQuery({
        queryKey: [userData],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/my-wishlist/${userData._id}`)
            return res.data;
        }
    })

    console.log("wislist", data);
    

    if(isLoading) return <Loader/>

    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className="text-center text-xl font-semibold mt-5">My Wishlist</h1>
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead className="bg-sky-900">
                        <tr className="bg-myBlue text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Title</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(product => <tr className="hover:bg-gray-50 border-b transition duration-300" key={product._id}>
                                <td className="py-4 px-6 border-b text-xl font-medium"><img className="w-16" src={product.img} alt="" /></td>
                                <td className="py-4 px-6 border-b text-xl font-medium">{product?.title}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">$ {product?.price}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{product?.brand}</td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;