
const TopBrands = () => {
    return (
        <div className="container my-10">
            <div>
                <h1 className="text-4xl font-bold text-center">Top Brands</h1>
                <p className="text-center">Top Brand Divices with most competitive pricing</p>
                <div className="w-1/2 my-3 flex gap-3 bg-white rounded-full mx-auto p-2 shadow-lg">
                    <button className="px-8 py-2 rounded-full bg-green-500 text-white text-sm font-bold">iPhone</button>
                    <button className="px-8 py-2 rounded-full bg-green-500 text-white text-sm font-bold">Samsung</button>
                    <button className="px-8 py-2 rounded-full bg-green-500 text-white text-sm font-bold">Google Pixel</button>
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