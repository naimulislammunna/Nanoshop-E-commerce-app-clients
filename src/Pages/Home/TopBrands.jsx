import { useState } from "react";

const TopBrands = () => {
    const [activeButton, setActiveButton] = useState(0);
    const buttons = ['iPhone', 'Samsung', 'Nokia'];
    return (
        <div className="container my-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-center">Top Brands</h1>
                <p className="text-center">Top Brand Divices with most competitive pricing</p>
                <div className="max-w-full my-3 inline-flex gap-3 bg-white rounded-full mx-auto p-2 shadow-lg">
                {
                    buttons.map( (button, idx )=> <button onClick={() => setActiveButton(idx)} key={idx} className={`${activeButton === idx ? 'button-2' : 'px-7 py-2 text-sm font-semibold hover:text-primary'}`}>{button}</button>)
                }
                </div>
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 col-span-9 mx-auto">
                    {
                    //   <ProductCard/>
                    }
                </div>
            </div>
        </div>
    );
};

export default TopBrands;