
const OrderSummaryModal = ({ order }) => {
    const { status, date, subtotal, totalPrice, formData, cartData, } = order;
    const { name,
        number,
        address,
        division,
        district } = formData;

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-xl">
                <div className="bg-indigo-600 px-6 py-4">
                    <div className="flex items-center justify-between gap-2">
                        <h2 className="text-lg font-semibold text-white">Order Confirmation</h2>
                        <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full">{status}</span>
                    </div>
                    <p className="text-slate-200 text-sm mt-2">Thank you for your order!</p>
                </div>

                <div className="p-6">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Order Number</p>
                            <p className="text-slate-900 text-sm font-medium mt-2">#ORD-78945</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Date</p>
                            <p className="text-slate-900 text-sm font-medium mt-2">{date}</p>
                        </div>
                        <div>
                            <p className="text-slate-500 text-sm font-medium">Total</p>
                            <p className="text-sm font-medium text-indigo-700 mt-2">${totalPrice}</p>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 mt-8">
                        <h3 className="text-base font-medium text-slate-900 mb-6">Shipping Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Customer</p>
                                <p className="text-slate-900 text-sm font-medium mt-2">{name}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Shipping Method</p>
                                <p className="text-slate-900 text-sm font-medium mt-2">Express Delivery</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Address</p>
                                <p className="text-slate-900 text-sm font-medium mt-2">{address}, {district}, {division}</p>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">Phone</p>
                                <p className="text-slate-900 text-sm font-medium mt-2">{number}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-base font-medium text-slate-900 mb-6">Order Items ({cartData.length})</h3>
                        <div className="space-y-4">
                            {
                                cartData.map((item , idx)=> <div key={idx} className="flex items-start gap-4 max-sm:flex-col max-sm:border-t max-sm:pt-4 max-sm:border-gray-300">
                                <div className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                                    <img src={item?.img} alt="Product" className="w-14 h-14 object-contain rounded-sm" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-slate-900">{item?.title}</h4>
                                    <p className="text-[13px] font-medium text-slate-500 mt-1 flex items-center gap-2">Color: <span style={{backgroundColor: item?.color }} className={`inline-block w-4 h-4 rounded-sm `}></span></p>
                                    <p className="text-slate-500 text-xs font-medium mt-1">Qty:{item?.quantity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-slate-900 text-sm font-semibold">${item?.price}</p>
                                </div>
                            </div>)
                            }
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-4 mt-8">
                        <h3 className="text-base font-medium text-slate-900 mb-6">Order Summary</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="text-sm text-slate-500 font-medium">Subtotal</p>
                                <p className="text-slate-900 text-sm font-semibold">${subtotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-slate-500 font-medium">Shipping</p>
                                <p className="text-slate-900 text-sm font-semibold">$25.00</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-sm text-slate-500 font-medium">Tax</p>
                                <p className="text-slate-900 text-sm font-semibold">$0.00</p>
                            </div>
                            <div className="flex justify-between pt-3 border-t border-gray-300">
                                <p className="text-[15px] font-semibold text-slate-900">Total</p>
                                <p className="text-[15px] font-semibold text-indigo-700">${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm font-medium">Need help? <a href="javascript:void(0)" className="text-indigo-700 hover:underline">Contact us</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummaryModal;