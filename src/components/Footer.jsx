import React from 'react';
import './Footer.css'; // Import the footer styles

const Footer = () => {        
    return (
        <section className="footer py-10">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        {/* Logo Image with Link to Home */}
                        <a href="/" title="Home">
                            <img 
                                className="w-auto h-40 mb-4" // Adjust height for larger size
                                src="src/assets/logo.png" // Path to your logo
                                alt="Logo"
                            />
                        </a>
                        
                        {/* Tagline 
                        <p className="text-base leading-relaxed mt-7">It's Time to ShineUp</p>*/}
                        
                        {/* Social Media Links */}
                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a 
                                    href="#" 
                                    title="Twitter" 
                                    className="flex items-center justify-center rounded-full w-7 h-7 hover:bg-orange-500"
                                >
                                    {/* Add Twitter SVG Icon */}
                                </a>
                            </li>
                            {/* Repeat for other social media icons */}
                        </ul>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-4">
                        <h4 className="text-lg font-semibold mb-7">Contact Us</h4>
                        <form>
                            <div className="subscribe-form">
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="input-field w-full p-3 rounded-md" 
                                />
                                <button 
                                    type="submit" 
                                    className="subscribe-button"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
