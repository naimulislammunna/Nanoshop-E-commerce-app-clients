import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUserData from "../../Hooks/useUserData";
import Loader from "../../Components/Loader";

const CheckOutForm = () => {
    const axiosSecure = useAxiosSecure();
    const { userData } = useUserData();

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
                    <div className="flex items-start mb-16">
                        <div className="w-full">
                            <div className="flex items-center w-full">
                                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                                    <span className="text-sm text-white font-semibold">1</span>
                                </div>
                                <div className="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                            </div>
                            <div className="mt-2 mr-4">
                                <h6 className="text-sm font-semibold text-slate-900">Cart</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center w-full">
                                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                                    <span className="text-sm text-white font-semibold">2</span>
                                </div>
                                <div className="w-full h-[3px] mx-4 rounded-lg bg-slate-300"></div>
                            </div>
                            <div className="mt-2 mr-4">
                                <h6 className="text-sm font-semibold text-slate-900">Checkout</h6>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-slate-300 p-1.5 flex items-center justify-center rounded-full">
                                    <span className="text-sm text-white font-semibold">3</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h6 className="text-sm font-semibold text-slate-400">Order</h6>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2  gap-y-12 gap-x-8 lg:gap-x-12">
                        <div className="">
                            <form>
                                <div>
                                    <h2 className="text-xl text-slate-900 font-semibold mb-6">Delivery Details</h2>
                                    <div className="grid lg:grid-cols-1 gap-y-6 gap-x-4">
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">First Name</label>
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
                                            <label className="text-sm text-slate-900 font-medium block mb-2">Address Line</label>
                                            <input type="text" placeholder="Enter Address Line"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">City</label>
                                            <input type="text" placeholder="Enter City"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                        </div>
                                        <div>
                                            <label className="text-sm text-slate-900 font-medium block mb-2">State</label>
                                            <input type="text" placeholder="Enter State"
                                                className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
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
                                        data.map((product ,idx)=> <div key={idx} className="flex p-2 gap-6 sm:gap-4 max-sm:flex-col border border-gray-200 rounded-lg">
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
                                                <label for="card" className="ml-4 flex gap-2 cursor-pointer">
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
                                                <label for="paypal" className="ml-4 flex gap-2 cursor-pointer">
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
                                    <input type="email" placeholder="Promo code"
                                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600" />
                                    <button type='button' className="flex items-center justify-center font-medium tracking-wide bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <h2 className="text-xl text-slate-900 font-semibold mb-6">Order Summary</h2>
                            <ul className="text-slate-500 font-medium space-y-4">
                                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold text-slate-900">$72.00</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-semibold text-slate-900">$0.00</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-semibold text-slate-900">$6.00</span></li>
                                <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-semibold text-slate-900">$5.00</span></li>
                                <hr className="border-slate-300" />
                                <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">Total <span className="ml-auto">$83.00</span></li>
                            </ul>
                            <div className="space-y-4 mt-8">
                                <button type="button" className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">Complete Purchase</button>
                                <button type="button" className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer">Continue Shopping</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutForm;