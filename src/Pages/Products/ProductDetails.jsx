import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useUserData from "../../Hooks/useUserData";

const ProductDetails = () => {
    const data = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { userData } = useUserData();

    const handleMyCart = async (id) => {
        const doc = {
            userEmail: user.email,
            productId: id
        }
        const res = await axiosSecure.patch(`/update-cart`, doc);

        if (res.data.modifiedCount) {
            toast.success("Add to Cart");
        }
    }

    return (
        <div className="container my-10">
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-96"
                        src={data?.img}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}</h2>
                    <p>Brand: {data?.brand}</p>
                    <p>Category: {data?.category}</p>
                    <div>
                        <ul>
                            <li>Display: {data.description?.display}</li>
                            <li>camera: {data.description?.camera}</li>
                            <li>processor: {data.description?.processor}</li>
                            <li>ram: {data.description?.ram} <span>Rom: {data.description?.rom}</span></li>
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <p className="text-lg font-semibold text-red-800">$ {data?.price}</p>
                        {
                            userData?.role === "buyer" ? <button onClick={() => handleMyCart(data._id)} className="btn btn-primary">Add to Cart</button> :
                            <button className="btn btn-primary cursor-not-allowed">Add to Cart</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;