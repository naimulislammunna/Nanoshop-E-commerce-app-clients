import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import Loader from "../../Components/Loader";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import usePriceCalculation from "../../Hooks/usePriceCalculation";

const CheckOutForm = () => {
    const axiosSecure = useAxiosSecure();
    const { userData } = useUserData();
    const singleData = useLoaderData();
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [divisionId, setDivisionId] = useState(1);



    const { prices, totalQuantity } =usePriceCalculation();
    const { quantity, price } = useAuth();
    const shippingCharge = 25;
    const subtotal = prices ? (prices + shippingCharge) : (price + shippingCharge);
    const productQuantity = totalQuantity ? totalQuantity : quantity;
    const [discountValue, setDiscountValue] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [totalPrice, setTotalPrice] = useState(subtotal);

    const handleDiscountPrice = () => {
        if (discountValue == "MERN") {
            const discount = (price * 0.1).toFixed(2);
            setDiscountPrice(discount);
            const totalPrice = (price - discount) + shippingCharge;
            setTotalPrice(totalPrice);
        }

    }


    useEffect(() => {
        fetch('https://bdapi.vercel.app/api/v.1/division')
            .then(res => res.json())
            .then(data => setDivisions(data.data))
    }, [])

    useEffect(() => {
        fetch(`https://bdapi.vercel.app/api/v.1/district/${divisionId}`)
            .then(res => res.json())
            .then(data => setDistricts(data.data))
    }, [divisions, divisionId])

    const handleDivisionChange = (e) => {
        const selectedId = parseInt(e.target.value);
        setDivisionId(selectedId)
    };




    const { data, isLoading } = useQuery({
        queryKey: [userData],
        queryFn: async () => {
            const res = await axiosSecure.get(`/my-cart/${userData._id}`)
            return res.data;
        }
    })

    if (isLoading) return <Loader />

    return (
        <div className="container">
            <div className="bg-white sm:px-8 px-4 py-6">
                <div className="max-w-screen-xl max-md:max-w-xl mx-auto">

                    <div className="grid md:grid-cols-2  gap-y-12 gap-x-8 lg:gap-x-12">
                        <div className="">
                            <form>
                                <div>
                                    <h2 className="text-xl text-slate-900 font-semibold mb-6">Delivery Details</h2>
                                    <div className="grid lg:grid-cols-1 gap-y-6 gap-x-4">
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Your Name</label>
                                            <input type="text" placeholder="Enter First Name"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Email</label>
                                            <input type="email" placeholder="Enter Email"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Phone No.</label>
                                            <input type="number" placeholder="Enter Phone No."
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Address Details</label>
                                            <input type="text" placeholder="Enter Address Line"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Division</label>
                                            <select onChange={(e) => handleDivisionChange(e)} className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600">

                                                {
                                                    divisions.map((division, idx) => <option key={idx} value={division.id}>{division.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">State</label>
                                            <select name="" id="" className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600">

                                                {
                                                    districts.map((district, idx) => <option key={idx} value={district.name}>{district.name}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>

                        <div className="relative">
                            <div>
                                <h2 className="text-xl text-slate-900 font-semibold mb-6">Your Order</h2>
                                <div className="gap-4 space-y-2 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                                    {
                                        singleData ? <div className="flex p-2 gap-6 sm:gap-4 max-sm:flex-col border border-gray-200 rounded-lg">
                                            <div className="w-10 h-12 max-sm:w-12 max-sm:h-12 shrink-0">
                                                <img src={singleData.img} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div>
                                                    <h3 className="text-sm sm:text-base font-semibold text-slate-900">{singleData.title}</h3>
                                                    <div className="flex mt-1 gap-3">
                                                        <h3 className="text-sm font-semibold text-slate-900">${singleData.price}</h3>
                                                        <p className="text-[13px] font-medium text-slate-500 flex items-center gap-2">Color: <span className="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : data.map((product, idx) =>
                                            <div key={idx} className="flex p-2 gap-6 sm:gap-4 max-sm:flex-col border border-gray-200 rounded-lg">
                                                <div className="w-10 h-12 max-sm:w-12 max-sm:h-12 shrink-0">
                                                    <img src={product.img} className="w-full h-full object-contain" />
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div>
                                                        <h3 className="text-sm sm:text-base font-semibold text-slate-900">{product.title}</h3>
                                                        <div className="flex mt-1 gap-3">
                                                            <h3 className="text-sm font-semibold text-slate-900">${product.price}</h3>
                                                            <p className="text-[13px] font-medium text-slate-500 flex items-center gap-2">Color: <span className="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>

                            <div className="mt-12">
                                <h2 className="text-xl text-slate-900 font-semibold mb-6">Payment</h2>
                                <div className="grid gap-4 lg:grid-cols-2">
                                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                                        <div>
                                            <div className="flex items-center">
                                                <input type="radio" name="method" className="w-5 h-5 cursor-pointer" id="card" checked />
                                                <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                                    <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                                                    <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                                                    <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                                                </label>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm text-slate-500 font-medium">Pay with your debit or credit card</p>
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                                        <div>
                                            <div className="flex items-center">
                                                <input type="radio" name="method" className="w-5 h-5 cursor-pointer" id="paypal" />
                                                <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                                                    <img src="https://readymadeui.com/images/paypal.webp" className="w-20" alt="paypalCard" />
                                                </label>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm text-slate-500 font-medium">Pay with your paypal account</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 max-w-md">
                                <p className="text-slate-900 text-sm font-medium mb-2">Do you have a promo code?</p>
                                <div className="flex gap-4">
                                    <input onChange={(e) => setDiscountValue(e.target.value)} type="text" name="discount" placeholder="Promo code"
                                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                    <button onClick={handleDiscountPrice} type='button' className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                                <p className="text-slate-900 text-sm font-medium mb-2 my-2">Example: Use &quot;MERN&quot; for 10% Discount</p>
                            </div>
                            <h2 className="text-xl text-slate-900 font-semibold mb-6 mt-6">Order Summary</h2>
                            <ul className="text-slate-500 font-medium space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">Item Quantity<span className="ml-auto font-semibold text-slate-900">{productQuantity}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-slate-900">${subtotal}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-semibold text-slate-900">${discountPrice}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$25.00</span></li>
                                <hr className="border-slate-300" />
                                <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">Total <span className="ml-auto">${totalPrice}</span></li>
                            </ul>
                            <div className="space-y-4 mt-8">
                                <button type="button" className="rounded-md px-4 py-2.5 my-2 w-full text-sm font-medium tracking-wide bg-primary hover:bg-slate-900 text-white cursor-pointer">Complete Purchase</button>
                                <Link to="/all-products">
                                    <button type="button" className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer">Continue Shopping</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutForm;