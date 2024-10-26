import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import FullPortfolio from "../pages/FullPortfolio";

// Import the sample image for the portfolio items
import imgPath from "../assets/portfolioimgs/accscart.webp";

// Define categories and portfolio items
const categories = [
  { id: "all", label: "All" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "video-edit", label: "Video Edit" },
  { id: "3d-modelling", label: "3D Modelling" },
  { id: "web-development", label: "Web Development" },
];

const portfolioItems = [
  {
    id: 1,
    category: "graphic-design",
    img: imgPath,
    title: "Graphic Design 1",
  },
  {
    id: 2,
    category: "graphic-design",
    img: imgPath,
    title: "Graphic Design 2",
  },
  {
    id: 3,
    category: "graphic-design",
    img: imgPath,
    title: "Graphic Design 3",
  },
  {
    id: 4,
    category: "graphic-design",
    img: imgPath,
    title: "Graphic Design 4",
  },
  { id: 5, category: "3d-modelling", img: imgPath, title: "3D Modelling 1" },
  { id: 6, category: "3d-modelling", img: imgPath, title: "3D Modelling 2" },
  { id: 7, category: "3d-modelling", img: imgPath, title: "3D Modelling 3" },
  { id: 8, category: "3d-modelling", img: imgPath, title: "3D Modelling 4" },
  { id: 9, category: "video-edit", img: imgPath, title: "Video Edit 1" },
  { id: 10, category: "video-edit", img: imgPath, title: "Video Edit 2" },
  {
    id: 11,
    category: "web-development",
    img: imgPath,
    title: "Web Development 1",
  },
  {
    id: 12,
    category: "web-development",
    img: imgPath,
    title: "Web Development 2",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter portfolio items based on selected category
  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Works
      </h2>
      <div className="flex justify-center gap-4 my-8 flex-wrap"> {/* Allow wrapping on smaller screens */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 border rounded-md transition duration-300 text-sm sm:text-base ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                : "border-white text-white bg-transparent"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]} // Add pagination and autoplay modules
          pagination={{ clickable: true }} // Enable clickable pagination
          loop={true} // Enable looping
          autoplay={{
            delay: 3000, // Delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto"
          onMouseEnter={(swiper) => swiper.autoplay.stop()} // Stop autoplay on hover
          onMouseLeave={(swiper) => swiper.autoplay.start()} // Start autoplay on mouse leave
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div
          className="swiper-pagination"
          style={{ marginTop: "10px", textAlign: "center" }}
        ></div>
      </div>

      {/* View Full Portfolio Button */}
      <div className="hidden lg:flex justify-center space-x-12 items-center mt-8">
        <a
          href="/full-portfolio" // Update this link to your full portfolio page
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
        >
          View Full Portfolio
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
