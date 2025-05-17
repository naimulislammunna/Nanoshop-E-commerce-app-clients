import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Feature from "./Feature";
import FeatureCategory from "./FeatureCategory";
import FeatureProducts from "./FeatureProducts";
import NewArrival from "./NewArrival";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Feature/>
            <FeatureProducts/>
            <FeatureCategory/>
            <NewArrival/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;