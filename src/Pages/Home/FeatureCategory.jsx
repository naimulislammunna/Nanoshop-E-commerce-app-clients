import { GiDeliveryDrone } from "react-icons/gi";
import { PiFan } from "react-icons/pi";
import { IoTvOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { LuWatch } from "react-icons/lu";
import { SlEarphones } from "react-icons/sl";
import { RiMacbookLine } from "react-icons/ri";
import { BsEarbuds } from "react-icons/bs";
import { LiaTabletSolid } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { RiBattery2ChargeFill } from "react-icons/ri";

const FeatureCategory = () => {
    return (
        <div>
            <div className="my-20 mx-20">
                <h1 className="text-3xl font-bold text-center">Featured Category</h1>
                <p className="text-lg font-semibold text-center">Get Your Desired Product from Featured Category</p>
                <div className="grid grid-cols-6 gap-4 my-10">
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><GiDeliveryDrone className="mx-auto"/></div>
                        <p className="font-semibold">Drone</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><RiBattery2ChargeFill className="mx-auto"/></div>
                        <p className="font-semibold">Charger</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><PiFan className="mx-auto"/></div>
                        <p className="font-semibold">Charger Fan</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><IoTvOutline className="mx-auto"/></div>
                        <p className="font-semibold">TV</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><FaMobileAlt className="mx-auto"/></div>
                        <p className="font-semibold">Mobile Phone</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><LuWatch className="mx-auto"/></div>
                        <p className="font-semibold">Smart Watch</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><SlEarphones className="mx-auto"/></div>
                        <p className="font-semibold">Earphone</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><RiMacbookLine className="mx-auto"/></div>
                        <p className="font-semibold">MacBook</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><BsEarbuds className="mx-auto"/></div>
                        <p className="font-semibold">Earbuds</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><LiaTabletSolid className="mx-auto"/></div>
                        <p className="font-semibold">Tablets</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><IoCameraOutline className="mx-auto"/></div>
                        <p className="font-semibold">Camera</p>
                    </div>
                    <div className="p-7 rounded-xl bg-gray-300 text-center">
                        <div className="text-7xl text-center"><IoMdPhonePortrait className="mx-auto"/></div>
                        <p className="font-semibold">Power Bank</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureCategory;