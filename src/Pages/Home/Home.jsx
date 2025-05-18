import Banner from "./Banner";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Feature from "./Feature";
import FeatureCategory from "./FeatureCategory";
import FeatureProducts from "./FeatureProducts";
import NewArrival from "./NewArrival";
import PhoneBanner1 from "./PhoneBanner1";
import PhoneBanner2 from "./PhoneBanner2";
import Testimonials from "./Testimonials";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Feature/>
            <FeatureProducts/>
            <PhoneBanner1/>
            <FeatureCategory/>
            <NewArrival/>
            <PhoneBanner2/>
            <Testimonials/>
            <FAQ/>
            <Contact/>
        </div>
    );
};

export default Home;