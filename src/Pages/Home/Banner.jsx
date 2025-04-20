
const Banner = () => {
    return (
        <div>
            <div className="w-96 mx-auto my-10">
                <form action="">
                    <input type="text" name="search" className="w-72 rounded-lg border border-black bg-transparent px-4 py-2 text-black ring-offset-1 duration-200 focus:outline-none focus:ring-2" placeholder="Search Service" />
                    <button type="submit" className="px-4 py-2 rounded-full bg-sky-950 text-white lg:ml-2">Search</button>
                </form>
            </div>
            <div style={{ minHeight: 'inherit' }} className="container flex lg:flex-row flex-col justify-center gap-10">
                <div className="flex justify-center text-center py-40">
                    <div>
                        <h1 className="text-5xl font-bold text-sky-900">Best E-commerce Shop in Bangladesh</h1>
                        <h3 className="text-xl font-bold">Collect Your Dream From Here</h3>
                    </div>
                </div>
                <div className="w-full">
                    <img src="https://i.postimg.cc/MpZqC6Hh/realistic-smartphone-official-colors.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;