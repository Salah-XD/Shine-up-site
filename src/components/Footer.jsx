import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css'; // Import the footer styles

const Footer = () => {        
    return (
        <section className="footer py-10">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        {/* Parent div for logo and icons */}
                        <div className="flex flex-col items-center mb-4">
                            {/* Logo Image with Link to Home */}
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
                    
                    {/* Contact Form with Netlify Integration */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-4">
                        <h4 className="text-3xl font-semibold mb-7">Contact Us</h4>
                        <form 
                            name="contact" 
                            method="POST" 
                            data-netlify="true"
                            className="subscribe-form flex flex-col space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Name Field */}
                            <div>
                              <label className="text-white mb-1" htmlFor="name">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Enter your name" 
                                    className="input-field w-full p-3 rounded-md" 
                                    required 
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                              <label className="text-white mb-1" htmlFor="email">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                    className="input-field w-full p-3 rounded-md" 
                                    required 
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                              <label className="text-white mb-1" htmlFor="email">Email</label>
                                <textarea 
                                    name="details" 
                                    placeholder="Enter your message" 
                                    className="input-field w-full p-3 rounded-md" 
                                    rows="4" 
                                    required
                                />
                            </div>

                            {/* Centered Button */}
                            <div className="text-center">
                                <button 
                                    type="submit" 
                                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white mx-auto"
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
