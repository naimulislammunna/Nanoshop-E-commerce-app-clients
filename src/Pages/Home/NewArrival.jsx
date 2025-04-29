
const NewArrival = () => {
    return (
        <div className="my-20 mx-5">
            <h1 className="text-3xl font-bold text-center">New Arrival</h1>
            <p className="text-lg font-semibold text-center">Gadgets</p>
            <div className="flex flex-col md:flex-row gap-5 w-full my-5">
                <div className="w-full">
                    <img src="https://i.postimg.cc/mk5h41sK/Motorola-Edge-60-Fusion-5-G-8158.jpg"/>
                </div>
                <div className="w-full">
                    <img src="https://i.postimg.cc/NGJKmSHb/Pixel-7-Pro-5908.png"/>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;