import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useUserData from "../../Hooks/useUserData";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const ProductDetails = () => {
    const data = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const pricePerProduct = parseInt(data?.price);
    const [price, setPrice] = useState(pricePerProduct);

    const colours = ["#800020","#A020F0","#87CEEB","black"]

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

    const handlePlus = () => {
        if (quantity < 10) {
            setQuantity((prevQuantity) => prevQuantity + 1)
            setPrice((amount) => amount + pricePerProduct)
        }
    }

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1)
            setPrice((amount) => amount - pricePerProduct)
        }
    }
    
    
    // image slider 
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.postimg.cc/dtCLt67j/Galaxy-S22-Ultra-Burgundy-6141.jpg" }, { img: "https://i.postimg.cc/wxZ1pZBB/Galaxy-S22-Ultra-Bora-Purple-4999.jpg"}, { img: "https://i.postimg.cc/cLN6K3wy/Galaxy-S22-Ultra-Sky-Blue-5511.jpg"}, { img: "https://i.postimg.cc/C535sB28/Galaxy-S22-Phantom-Black-1075.jpg"}];

    return (
        <div className="container my-10">
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
                <figure className="flex-col">
                    <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform ease-linear"
                        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                        {/* text container here */}
                        <div className="drop-shadow-lg text-white text-center px-5">
                            <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                            <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                        </div>
                    </div>
                    {/* slider container */}
                    <div className="h-24 flex justify-center items-center gap-3 p-2">
                        {/* sliders */}
                        {sliders.map((slide, inx) => (
                            <img onClick={() => setCurrentSlider(inx)} key={inx}
                                src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                                alt={slide.title} />
                        ))}
                    </div>
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
                        <div className="flex gap-4 my-3">
                            <span className="">Choose Colour :</span>
                            {
                                colours.map((colour, idx) => <div onClick={() => setCurrentSlider(idx)} key={idx} className={`w-7 h-7 rounded-md bg-[${colour}]  border-2 border-white outline outline-offset-2 outline-gray-500 cursor-pointer`}></div>)
                            }
                            
                        </div>
                        <div className="w-36 px-5 py-2 my-5 flex border border-red-800 rounded-full">
                            <button onClick={handleMinus} className="hover:text-red-800"><FaMinus /> </button>
                            <p className="font-bold px-7">{quantity}</p>
                            <button onClick={handlePlus} className="hover:text-red-800"><FaPlus /> </button>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <p className="text-lg font-semibold text-red-800">$ {price}</p>
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
