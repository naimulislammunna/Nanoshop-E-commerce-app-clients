import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import { useQuery } from "react-query";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useCartData from "../../Hooks/useCartData";
import usePriceCalculation from "../../Hooks/usePriceCalculation";

const ShopingCart = () => {
    const axiosSecure = useAxiosSecure();
    const { userData } = useUserData();
    const { user } = useAuth();
    const { cartData} = useCartData();
    const {prices} = usePriceCalculation();

    const shippingCost = 25;
    const totalPrice = prices + shippingCost;


    const handleRemoveItem = async (id) => {
        const doc = {
            userEmail: user.email,
            productId: id
        }
        const res = await axiosSecure.patch(`/delete-cart-list`, doc);

        if (res.data.modifiedCount) {
            toast.success("Remove Product");
            refetch();
        }
    }


    return (
        <div>
            <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
                <h1 className="text-xl my-4 font-semibold text-slate-900">Shopping Cart</h1>
                <div className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6">
                    <div className="lg:col-span-2 space-y-6  p-4 border border-gray-300 rounded-lg">
                        {
                            cartData?.map(product => <div key={product._id} className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                                <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                                    <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                                        <img src={product.img} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <h3 className="text-sm sm:text-base font-semibold text-slate-900">{product.title}</h3>
                                            <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">Color: <span className="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span></p>
                                        </div>
                                        <div className="mt-auto flex gap-4">
                                            <h3 className="text-sm font-semibold text-slate-500">Quantity: {product.quantity}</h3>
                                            <h3 className="text-sm font-semibold text-slate-500">Total Price:<span className="text-red-500"> $  {product.productPrice}</span></h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="ml-auto flex flex-col">
                                    <div className="flex items-start gap-4 justify-end">
                                        <button onClick={() => handleRemoveItem(product._id)}>
                                            <RiDeleteBinLine className="text-xl cursor-pointer fill-slate-400 hover:fill-red-600 inline-block" />
                                        </button>
                                    </div>
                                    {/* <div className="px-3 py-1 text-sm flex items-center gap-3 mt-auto border border-slate-900 rounded-full">
                                        <button className="hover:text-red-800"><FaMinus /> </button>
                                        <p className="font-bold px-2">{}</p>
                                        <button className="hover:text-red-800"><FaPlus /> </button>
                                    </div> */}
                                </div>
                            </div>)
                        }
                    </div>

                    <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
                        <ul className="text-slate-500 font-medium space-y-4">
                            <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-slate-900">${prices}</span></li>
                            <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$25.00</span></li>
                            <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold text-slate-900">$0.00</span></li>
                            <hr className="border-slate-300" />
                            <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">Total <span className="ml-auto">${totalPrice}</span></li>
                        </ul>
                        <div className="mt-8 space-y-4">
                            <Link to='/checkout'>
                                <button type="button" className="text-sm px-4 py-2.5 w-full font-medium tracking-wide bg-primary hover:bg-slate-900 text-white rounded-md cursor-pointer">Buy Now</button>
                            </Link>
                            <Link to='/all-products'>
                                <button type="button" className="text-sm my-2 px-4 py-2.5 w-full font-medium tracking-wide bg-slate-50 hover:bg-slate-100 text-slate-900 border border-gray-300 rounded-md cursor-pointer">Continue Shopping</button>
                            </Link>
                        </div>
                        <div className="mt-5 flex flex-wrap justify-center gap-4">
                            <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
                            <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
                            <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;