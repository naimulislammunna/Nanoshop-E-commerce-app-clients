import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const MyProducts = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data =[], isLoading, refetch} = useQuery({
        queryKey: [],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/my-products?email=${user.email}`)
            return res.data;
        }
    })

    const handleCencel = async (id) => {
        const res = await axiosSecure.delete(`/my-products/${id}`);
        if (res.data?.deletedCount) {
            toast.success("Products Deleted")
            refetch();
        }
    }
    if(isLoading) return <Loader/>
    return (
        <div>
            <div className="overflow-x-auto">
                <h1 className="text-center text-xl font-semibold mt-5">My Products</h1>
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead className="bg-sky-900">
                        <tr className="bg-myBlue text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Title</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Brand</th>
                            <th className="py-4 px-6 text-lg border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(product => <tr className="hover:bg-gray-50 border-b transition duration-300" key={product._id}>
                                <td className="py-4 px-6 border-b text-xl font-medium">{product?.title}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">$ {product?.price}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium">{product?.brand}</td>
                                <td className="py-4 px-6 border-b text-lg font-medium flex justify-center items-center">
                                    <div className="inline-flex items-center px-3 py-3 rounded-full gap-x-2 bg-green-100/60 dark:bg-gray-800 mx-2">
                                    <Link to={`update-products/${product._id}`}><button className="text-green-700 text-2xl"><FaEdit /></button></Link>
                                    </div>
                                    <div className="inline-flex items-center px-3 py-3 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                    <button onClick={() => handleCencel(product._id)} className="text-red-500 text-2xl"><MdDelete /></button>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;