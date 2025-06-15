import { Link, useLoaderData } from "react-router-dom";
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
    // const [price, setPrice] = useState(pricePerProduct);
    const [activeRam, setActiveRam] = useState(0);
    const [activeRom, setActiveRom] = useState(0);
    const [activeColor, setActiveColor] = useState(0);

    const colours = ["#800020", "#A020F0", "#87CEEB", "black"]
    const rams = [8, 16, 32];
    const roms = [128, 256, 512]

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
        if (quantity < 5) {
            setQuantity((prevQuantity) => prevQuantity + 1)
            // setPrice((amount) => amount + pricePerProduct)
        }
    }

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1)
            // setPrice((amount) => amount - pricePerProduct)
        }
    }


    // image slider 
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.postimg.cc/dtCLt67j/Galaxy-S22-Ultra-Burgundy-6141.jpg" }, { img: "https://i.postimg.cc/wxZ1pZBB/Galaxy-S22-Ultra-Bora-Purple-4999.jpg" }, { img: "https://i.postimg.cc/cLN6K3wy/Galaxy-S22-Ultra-Sky-Blue-5511.jpg" }, { img: "https://i.postimg.cc/C535sB28/Galaxy-S22-Phantom-Black-1075.jpg" }];

    return (
        <div className="container my-10">
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
                <figure className="flex-col w-1/2">
                    <div className="h-3/4 w-3/4">
                        <img src={`${sliders[currentSlider].img}`} alt="" />
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
                <div className="card-body bg-gray-100">
                    <h2 className="text-3xl font-semibold">{data?.title}</h2>
                    <ul>
                        <li className="text-sm">Brand: {data?.brand}</li>
                        <li className="text-sm">Category: {data?.category}</li>
                        <li className="text-sm">Display: {data.description?.display}</li>
                        <li className="text-sm">Camera: {data.description?.camera}</li>
                        <li className="text-sm">Processor: {data.description?.processor}</li>
                    </ul>
                    <div>
                        <div className="my-2">
                            <p className="text-sm font-bold">Ram</p>
                            <div className="flex gap-2">
                                {
                                    rams.map((ram, idx) => <button onClick={() => setActiveRam(idx)} key={idx} className={`px-5 py-1 bg-white my-2 text-sm rounded-md border ${activeRam === idx ? 'border-1 border-primary text-primary' : ''}`}>{ram} GB</button>)
                                }
                            </div>
                            <p className="text-sm  font-bold">Storage</p>
                            <div className="flex gap-2">
                                {
                                    roms.map((rom, idx) => <button onClick={() => setActiveRom(idx)} key={idx} className={`px-5 py-1 bg-white my-2 text-sm rounded-md border ${activeRom === idx ? 'border-1 border-primary text-primary' : ''}`}>{rom} GB</button>)
                                }
                            </div>
                        </div>
                        <div className="flex gap-4 my-3 items-center">
                            <span className="text-sm font-bold">Choose Colour :</span>
                            {
                                colours.map((colour, idx) => <div style={{ backgroundColor: colour }} onClick={() => [setCurrentSlider(idx), setActiveColor(idx)]} key={idx} className={`w-7 h-7 rounded-full  cursor-pointer ${activeColor === idx ?  'border-2 border-primary' : 'border-4 border-white'}`}></div>)
                            }

                        </div>
                        <div className="w-36 px-5 py-2 my-5 text-sm flex border border-primary rounded-full">
                            <button onClick={handleMinus} className="hover:text-red-800"><FaMinus /> </button>
                            <p className="font-bold px-7">{quantity}</p>
                            <button onClick={handlePlus} className="hover:text-red-800"><FaPlus /> </button>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={'/buynow'}>
                    <button className="button-2">Buy Now</button>
                    </Link>
                        {
                            userData?.role === "buyer" ? <button onClick={() => handleMyCart(data._id)} className="button-2">Add to Cart</button> :
                                <button className="button-2">Add to Cart</button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
