import React from "react";
import accscartImage from "../assets/portfolioimgs/accscart.webp"; // Adjust path as necessary

const portfolioItems = [
    { id: 1, category: "graphic design", image: accscartImage },
    { id: 2, category: "graphic design", image: accscartImage },
    { id: 3, category: "graphic design", image: accscartImage },
    { id: 4, category: "graphic design", image: accscartImage },
    { id: 5, category: "3d modelling", image: accscartImage },
    { id: 6, category: "3d modelling", image: accscartImage },
    { id: 7, category: "3d modelling", image: accscartImage },
    { id: 8, category: "3d modelling", image: accscartImage },
    { id: 9, category: "video editing", image: accscartImage },
    { id: 10, category: "video editing", image: accscartImage },
    { id: 11, category: "web development", image: accscartImage },
    { id: 12, category: "web development", image: accscartImage },
];

const FullPortfolio = () => {
    return (
        <div id="full-portfolio" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
            Full Portfolio
        </h2>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioItems.map((item) => (
            <div
                key={item.id}
                className="w-full aspect-square overflow-hidden rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
            >
                <img
                src={item.image}
                alt={`Portfolio item ${item.id}`}
                className="object-cover w-full h-full"
                />
            </div>
            ))}
        </div>
        </div>
    );
    };

export default FullPortfolio;
