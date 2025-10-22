import { useState } from "react";

const PaymentMethod = () => {
      const [selectedOption, setSelectedOption] = useState("");

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(selectedOption);
        
        
    }
    const handleChange = (e) =>{
        setSelectedOption(e.target.value)
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-12">
                <h2 className="text-xl text-slate-900 font-semibold mb-6">Payment</h2>
                <div className="grid gap-4 lg:grid-cols-2">
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                        <div>
                            <div className="flex items-center">
                                <input type="radio" name="method" value="stripe" className="w-5 h-5 cursor-pointer" id="card" onChange={handleChange}/>
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
                                <input type="radio" name="method" value="sslcommerze" className="w-5 h-5 cursor-pointer" id="card" onChange={handleChange}/>
                                <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                    <img src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png" className="w-32" alt="card1" />
                                </label>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-500 font-medium">Pay with sslcommerz</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                        <div>
                            <div className="flex items-center">
                                <input type="radio" name="method" value="cod" className="w-5 h-5 cursor-pointer" id="paypal" onChange={handleChange}/>
                                <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                                    <img src="https://i.postimg.cc/NMvB827S/Cash-On-Delivery-Cod-Fast-Car-With-Flat-Design-Style-Orange-Color-Cash-On-Delivery-Cash-Delivery.png" className="w-20" alt="paypalCard" />
                                </label>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-500 font-medium">Cash on Delivery</p>
                    </div>
                </div>
                <button type="submit" value="submit">submit</button>
            </div>
        </form>
    );
};

export default PaymentMethod;