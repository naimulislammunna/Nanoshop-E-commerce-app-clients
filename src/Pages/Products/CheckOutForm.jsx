
const CheckOutForm = () => {
    return (
        <div>
            <div className="mx-auto flex w-72 items-center justify-center">
                

                <div className={`fixed inset-0 z-[100] transition-opacity duration-300  bg-black/60 backdrop-blur-sm`}>
                    <div className="absolute inset-0" />
                    <div className={`relative mx-auto max-w-4xl transform transition-all duration-300 md:my-8 `}>
                        <div className="h-screen overflow-y-auto bg-white shadow-2xl md:max-h-[90vh] md:rounded-2xl dark:bg-gray-800">
                            <div className="p-6 sm:p-8">
                                <div className="flex justify-end">
                                </div>

                                <div className="grid gap-8 px-4 sm:px-6 lg:grid-cols-2">
                                    <div className="space-y-6">
                                        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                                            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Shipping Details</h3>
                                            <form className="space-y-5">
                                                {['Name', 'Address', 'City', 'Country'].map((field) => (
                                                    <div key={field} className="relative">
                                                        <input
                                                            type="text"
                                                            name={field.toLowerCase()}
                                                            className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                                                            placeholder={field}
                                                            id={field.toLowerCase()}
                                                        />
                                                        <label
                                                            htmlFor={field.toLowerCase()}
                                                            className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:bg-gray-900 dark:text-gray-300"
                                                        >
                                                            {field}
                                                        </label>
                                                    </div>
                                                ))}
                                            </form>
                                        </div>

                                        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                                            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Payment Information</h3>
                                            <form className="space-y-5">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="card-number"
                                                        className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                                                        placeholder="Card Number"
                                                        id="card-number"
                                                    />
                                                    <label
                                                        htmlFor="card-number"
                                                        className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:bg-gray-900 dark:text-gray-300"
                                                    >
                                                        Card Number
                                                    </label>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            name="expiry"
                                                            className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                                                            placeholder="MM/YY"
                                                            id="expiry"
                                                        />
                                                        <label
                                                            htmlFor="expiry"
                                                            className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:bg-gray-900 dark:text-gray-300"
                                                        >
                                                            Expiry Date
                                                        </label>
                                                    </div>
                                                    <div className="relative">
                                                        <input
                                                            type="text"
                                                            name="cvv"
                                                            className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                                                            placeholder="CVV"
                                                            id="cvv"
                                                        />
                                                        <label
                                                            htmlFor="cvv"
                                                            className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:bg-gray-900 dark:text-gray-300"
                                                        >
                                                            CVV
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="billing-address"
                                                        className="peer w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-white"
                                                        placeholder="Billing Address"
                                                        id="billing-address"
                                                    />
                                                    <label
                                                        htmlFor="billing-address"
                                                        className="absolute -top-2.5 left-4 bg-white px-1 text-sm font-medium text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500 dark:bg-gray-900 dark:text-gray-300"
                                                    >
                                                        Billing Address
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
                                            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Order Summary</h3>
                                            <div className="space-y-4">
                                                {[
                                                    { name: 'Product 1', price: '$99.99' },
                                                    { name: 'Product 2', price: '$49.99' },
                                                    { name: 'Product 3', price: '$29.99' }
                                                ].map((item, index) => (
                                                    <div key={index} className="flex justify-between text-gray-700 dark:text-gray-300">
                                                        <span>{item.name}</span>
                                                        <span>{item.price}</span>
                                                    </div>
                                                ))}
                                                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                                                    <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                                                        <span>Total</span>
                                                        <span>$179.97</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                
                                                className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-medium text-white transition-all hover:from-blue-700 hover:to-indigo-700 focus:outline-none"
                                            >
                                                Complete Purchase
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutForm;