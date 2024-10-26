import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";

const Home = () => {
    return (
        <>
        <HeroSection />
        <FeatureSection />
        <Portfolio />
        <Team /> 
        <Testimonials />
        </>
    );
};

export default Home;
