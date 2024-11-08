import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Videosection from "../components/Videosection";

const Home = () => {
  return (
    <>
      <Videosection />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Portfolio />
        <Team />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
