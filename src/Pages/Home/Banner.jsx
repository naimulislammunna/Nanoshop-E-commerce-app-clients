
const Banner = () => {
    return (
        <div>
            <div style={{ minHeight: 'inherit' }} className="container flex lg:flex-row flex-col justify-center gap-10">
                <div className="flex justify-center text-center py-40">
                    <div>
                        <h1 className="text-5xl font-bold">Best E-commerce Shop in Bangladesh</h1>
                        <h3 className="text-xl font-bold my-3">Collect Your Dream From Here</h3>
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