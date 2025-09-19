
const MyOrder = () => {
    return (
        <div className="p-4">
            <div className="max-w-screen-xl mx-auto">
                <div className="border-b border-gray-300 pb-4">
                    <div className="flex gap-4">
                        <h3 className="text-2xl font-semibold text-slate-900">Order History</h3>
                    </div>
                </div>

                <div className="divide-y divide-gray-300 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-x-7 gap-y-6 py-4">
                        <div className="flex gap-4">
                            <div className="w-20 h-20 max-sm:w-24 max-sm:h-24 shrink-0">
                                <img className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-900">Tshirt</h6>
                                <div className="mt-2">
                                    <p className="text-[15px] text-slate-500 font-medium">Order ID: <span className="ml-1 text-slate-900">#5381</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-around h-full">
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Date</h6>
                                <p className="text-[15px] text-slate-900 font-medium mt-2">May 12, 2025</p>
                            </div>
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Status</h6>
                                <p className="bg-green-100 text-[13px] font-medium text-green-600 mt-2 inline-block rounded-md py-1.5 px-3">Completed</p>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-around h-full">
                            <div>
                                <h6 className="text-[15px] font-medium text-slate-500">Price</h6>
                                <p className="text-[15px] text-slate-900 font-medium mt-2">$20.00</p>
                            </div>
                            <div>
                                <button type="button" className="flex items-center justify-center font-medium tracking-wide bg-slate-900 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;