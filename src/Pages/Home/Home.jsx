import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import FeatureProducts from "./FeatureProducts";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <FeatureProducts/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;