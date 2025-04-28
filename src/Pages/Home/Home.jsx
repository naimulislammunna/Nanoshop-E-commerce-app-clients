import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import FeatureCategory from "./FeatureCategory";
import FeatureProducts from "./FeatureProducts";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <FeatureProducts/>
            <FeatureCategory/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;