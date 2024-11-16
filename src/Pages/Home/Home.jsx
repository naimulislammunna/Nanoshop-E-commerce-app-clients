import { Outlet } from "react-router-dom";
import Navber from "../../Components/Navber";
import Footer from "../../Components/Footer";

const Home = () => {
    return (
        <div>
            <Navber/>
            <div className="min-h-[calc(100vh-144px)]">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;