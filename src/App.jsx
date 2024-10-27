import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FullPortfolio from "./pages/FullPortfolio";
import CustomScrollComponent from './components/CustomScrollComponent';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          {/* Home Route - This serves as the main page */}
          <Route path="/" element={<Home />} />
          {/* Full Portfolio Route */}
          <Route path="/full-portfolio" element={<FullPortfolio />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
