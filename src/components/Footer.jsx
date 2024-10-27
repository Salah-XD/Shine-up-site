import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css'; // Import the footer styles

const Footer = () => {        
    return (
        <section className="footer py-10">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    {/* Logo and Social Media Links */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <div className="flex flex-col items-center mb-4">
                            <a href="/" title="Home">
                                <img 
                                    className="w-auto h-40 mb-2" 
                                    src="src/assets/logo.png" 
                                    alt="Logo"
                                />
                            </a>
                            {/* Social Media Links */}
                            <ul className="flex items-center justify-center space-x-4">
                                <li>
                                    <a 
                                        href="#" 
                                        title="Facebook" 
                                        className="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <FaFacebookF className="w-6 h-6 text-white" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        title="Instagram" 
                                        className="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <FaInstagram className="w-6 h-6 text-white" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        title="Twitter" 
                                        className="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <FaTwitter className="w-6 h-6 text-white" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        title="LinkedIn" 
                                        className="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <FaLinkedinIn className="w-6 h-6 text-white" />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#" 
                                        title="Pinterest" 
                                        className="flex items-center justify-center rounded-full w-8 h-8"
                                    >
                                        <FaPinterestP className="w-6 h-6 text-white" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Us Button */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 flex items-center justify-center">
                        <a
                            href="mailto:digitalshineup@gmail.com"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white text-center"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
