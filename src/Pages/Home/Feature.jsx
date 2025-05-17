import { GiDeliveryDrone } from "react-icons/gi";

const Feature = () => {

    const features = [
        {
            title: "Warranty",
            subTitle: "12-months warranty",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
        {
            title: "Certified",
            subTitle: "Certified seller",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
        {
            title: "Replacement",
            subTitle: "7-Days Replacement",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
        {
            title: "Track",
            subTitle: "Track your order",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
        {
            title: "Range",
            subTitle: "Vast Range of Device",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
        {
            title: "Greener",
            subTitle: "For a Greener Future",
            icon : <GiDeliveryDrone className="mx-auto" />
        },
    ]
    return (
        <div className="my-10 mx-5 lg:mx-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
                {
                    features.map((item, idx )=> <div key={idx} className="p-4 rounded-xl bg-gray-300 text-center">
                        <div className="text-5xl text-center">{item.icon}</div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p>{item.subTitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feature;