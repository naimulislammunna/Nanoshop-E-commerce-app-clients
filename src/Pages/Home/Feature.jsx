import { GiDeliveryDrone } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdFindReplace } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CgArrangeBack } from "react-icons/cg";
import { RiMapPinRangeLine } from "react-icons/ri";

const Feature = () => {

    const features = [
        {
            title: "Warranty",
            subTitle: "12-months warranty",
            icon : <IoShieldCheckmark className="mx-auto" />
        },
        {
            title: "Certified",
            subTitle: "Certified seller",
            icon : <FaAward className="mx-auto" />
        },
        {
            title: "Replacement",
            subTitle: "7-Days Replacement",
            icon : <MdFindReplace className="mx-auto" />
        },
        {
            title: "Track",
            subTitle: "Track your order",
            icon : <FaLocationDot className="mx-auto" />
        },
        {
            title: "Range",
            subTitle: "Range of Device",
            icon : <CgArrangeBack className="mx-auto" />
        },
        {
            title: "Greener",
            subTitle: "For a Greener Future",
            icon : <RiMapPinRangeLine className="mx-auto" />
        },
    ]
    return (
        <div className="my-10 mx-5 lg:mx-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-10">
                {
                    features.map((item, idx )=> <div key={idx} className="px-2 py-6 rounded-xl bg-gray-100 text-center">
                        <div className="text-4xl text-center my-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.subTitle}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Feature;