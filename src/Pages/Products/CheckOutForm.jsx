import Loader from "../../Components/Loader";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import usePriceCalculation from "../../Hooks/usePriceCalculation";
import useCartData from "../../Hooks/useCartData";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckOutForm = () => {
    const axiosSecure = useAxiosSecure();
    const singleData = useLoaderData([]);
    const { cartData, isLoading } = useCartData();
    const [formData, setFormData] = useState([]);
    
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [divisionId, setDivisionId] = useState(1);

    const { totalPrice, sumOfPrice: subtotal, totalQuantity, discountPrice, handleDiscountPrice } = usePriceCalculation();

    const [discountValue, setDiscountValue] = useState();
    

    // const { totalPrice: prices, totalQuantity } = usePriceCalculation();
    // const { quantity, price } = useAuth();
    // const shippingCharge = 25;

    // const subtotal = prices ? (prices + shippingCharge) : (price + shippingCharge);

    // const productQuantity = totalQuantity ? totalQuantity : quantity;
    // 
    // const [discountPrice, setDiscountPrice] = useState();
    // const [totalPrice, setTotalPrice] = useState(subtotal);

    // const handleDiscountPrice = () => {
    //     if (discountValue == "MERN") {
    //         const discount = (price * 0.1).toFixed(2);
    //         setDiscountPrice(discount);
    //         const totalPrice = (price - discount) + shippingCharge;
    //         setTotalPrice(totalPrice);
    //     }

    // }


    useEffect(() => {
        fetch('https://bdapi.vercel.app/api/v.1/division')
            .then(res => res.json())
            .then(data => setDivisions(data.data))
    }, [])

    useEffect(() => {
        fetch(`https://bdapi.vercel.app/api/v.1/district/${divisionId}`)
            .then(res => res.json())
            .then(data => setDistricts(data.data))
    }, [divisionId])

    const handleDivisionChange = (e) => {
        const selectedId = JSON.parse(e.target.value);
        setDivisionId(parseInt(selectedId.id))
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => { setFormData(data) }

    const handleOrder = async () => {
        const doc = {
            cartData,
            formData,
            subtotal,
            totalPrice,
            totalQuantity,
            status : 'pending',
            date : new Date().toDateString()
        }
        
        

        const res = axiosSecure.patch("/update-order", doc);
        console.log(res);
        
    }

    if (isLoading) return <Loader />
    return (
        <div className="container">
            <div className="bg-white sm:px-8 px-4 py-6">
                <div className="max-w-screen-xl max-md:max-w-xl mx-auto">

                    <div className="grid md:grid-cols-2  gap-y-12 gap-x-8 lg:gap-x-12">
                        <div className="">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <h2 className="text-xl text-slate-900 font-semibold mb-6">Delivery Details</h2>
                                    <div className="grid lg:grid-cols-1 gap-y-6 gap-x-4">
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Your Name</label>
                                            <input {...register('name', { required: true })}
                                                type="text" placeholder="Enter Name"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                            {errors.name && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Email</label>
                                            <input type="email" {...register('email', { required: true })} placeholder="Enter Email"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                            {errors.email && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Phone No.</label>
                                            <input type="number" {...register('number', { required: true })} placeholder="Enter Phone No."
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                            {errors.number && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Address Details</label>
                                            <input type="text" {...register('address', { required: true })} placeholder="Enter Address Line"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                            {errors.address && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Division</label>
                                            <select  {...register('division', { required: true , onChange: (e) => handleDivisionChange(e)})}  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" >

                                                {
                                                    divisions.map((division, idx) => <option key={idx} value={JSON.stringify({id: division.id , name: division.name})}> {division.name}</option>)
                                                }
                                            </select>
                                            {errors.divi && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">District</label>
                                            <select name="" id="" {...register('district', { required: true })} className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600">

                                                {
                                                    districts.map((district, idx) => <option key={idx} value={district.name}>{district.name}</option>)
                                                }
                                            </select>
                                            {errors.district && <span className="text-red-600 text-sm my-1">This field is required</span>}
                                        </div>
                                        <button type="submit" className="btn">submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="relative">
                            <div>
                                <h2 className="text-xl text-slate-900 font-semibold mb-6">Your Order</h2>
                                <div className=" gap-4 space-y-2 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
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
                                        </div> : cartData.map((product, idx) =>
                                            <div key={idx} className="flex p-2 gap-6 sm:gap-4 max-sm:flex-col border border-gray-200 rounded-lg">
                                                <div className="w-10 h-12 max-sm:w-12 max-sm:h-12 shrink-0">
                                                    <img src={product.img} className="w-full h-full object-contain" />
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div>
                                                        <h3 className="text-sm sm:text-base font-semibold text-slate-900">{product.title}</h3>
                                                        <div className="flex mt-1 gap-3">
                                                            <h3 className="text-[13px] font-medium text-slate-500 flex items-center gap-2">${product.price}</h3>
                                                            <p className="text-[13px] font-medium text-slate-500 flex items-center gap-2">Color: <span style={{ backgroundColor: product?.color }} className="inline-block w-4 h-4 rounded-sm"></span></p>
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
                                                <input type="radio" name="method" className="w-5 h-5 cursor-pointer" id="card"/>
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
                                                    <img src="https://i.postimg.cc/NMvB827S/Cash-On-Delivery-Cod-Fast-Car-With-Flat-Design-Style-Orange-Color-Cash-On-Delivery-Cash-Delivery.png" className="w-20" alt="paypalCard" />
                                                </label>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm text-slate-500 font-medium">Cash on Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 max-w-md">
                                <p className="text-slate-900 text-sm font-medium mb-2">Do you have a promo code?</p>
                                <div className="flex gap-4">
                                    <input onChange={(e) => setDiscountValue(e.target.value)} type="text" name="discount" placeholder="Promo code"
                                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                    <button onClick={() => handleDiscountPrice(discountValue)} type='button' className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                                <p className="text-slate-900 text-sm font-medium mb-2 my-2">Example: Use &quot;MERN&quot; for 10% Discount</p>
                            </div>
                            <h2 className="text-xl text-slate-900 font-semibold mb-6 mt-6">Order Summary</h2>
                            <ul className="text-slate-500 font-medium space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">Item Quantity<span className="ml-auto font-semibold text-slate-900">{totalQuantity}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-slate-900">${subtotal}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-semibold text-slate-900">${discountPrice}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$25.00</span></li>
                                <hr className="border-slate-300" />
                                <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">Total <span className="ml-auto">${totalPrice}</span></li>
                            </ul>
                            <div className="space-y-4 mt-8">
                                <button onClick={handleOrder} type="button" className="rounded-md px-4 py-2.5 my-2 w-full text-sm font-medium tracking-wide bg-primary hover:bg-slate-900 text-white cursor-pointer">Complete Purchase</button>
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