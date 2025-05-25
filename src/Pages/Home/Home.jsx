import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import FeatureCategory from "./FeatureCategory";
import FeatureProducts from "./FeatureProducts";
import NewArrival from "./NewArrival";
import PhoneBanner1 from "./PhoneBanner1";
import PhoneBanner2 from "./PhoneBanner2";
import Testimonials from "./Testimonials";
import TopBrands from "./TopBrands";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Banner/>
            <Feature/>
            <FeatureProducts/>
            <PhoneBanner1/>
            <FeatureCategory/>
            <NewArrival/>
            <TopBrands/>
            <PhoneBanner2/>
            <Testimonials/>
            <FAQ/>
        </div>
    );
};

export default Home;