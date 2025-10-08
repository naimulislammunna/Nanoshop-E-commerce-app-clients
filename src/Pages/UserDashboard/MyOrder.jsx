import Loader from "../../Components/Loader";
import useOrderData from "../../Hooks/useOrderData";

const MyOrder = () => {
    const { orderData, isLoading} = useOrderData();
console.log(orderData);

    if (isLoading) return <Loader />

    return (
        <div className="p-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="border-b border-gray-300 pb-4">
                    <div className="flex gap-4">
                        <h3 className="text-2xl font-semibold text-slate-900">Order History</h3>
                    </div>
                </div>

                {
                    orderData.map((order , idx)=> <div key={idx} className="divide-y divide-gray-300 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-x-7 gap-y-6 py-4">
                        <div className="flex gap-4">
                            <div className="w-20 h-20 max-sm:w-24 max-sm:h-24 shrink-0">
                                <img src={order.cartData[0].img} className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-900">{order.cartData.length} items</h6>
                                <div className="mt-2">
                                    <p className="text-[15px] text-slate-500 font-medium">Order ID: <span className="ml-1 text-slate-900"># {5678}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-around h-full">
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Date</h6>
                                <p className="text-[15px] text-slate-900 font-medium mt-2">{order.date}</p>
                            </div>
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Status</h6>
                                <p className="bg-green-100 text-[13px] font-medium text-green-600 mt-2 inline-block rounded-md py-1.5 px-3">Completed</p>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-around h-full">
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Price</h6>
                                <p className="text-[15px] text-slate-900 font-medium mt-2">${order.totalPrice}</p>
                            </div>
                            <div>
                                <button type="button" className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">View</button>
                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default MyOrder;