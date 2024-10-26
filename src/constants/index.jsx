import { ScissorsLineDashed } from "lucide-react";
import { PenTool } from "lucide-react";
import { PanelTop } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { Rotate3d } from "lucide-react";
import FullPortfolio from "../pages/FullPortfolio";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";


export const navItems = [
  { label: "Home", href: "/" }, // Home link
  { label: "Services", href: "/#features" }, // Updated to link to Services section
  { label: "Portfolio", href: "/full-portfolio" },
  { label: "Testimonials", href: "/#testimonials" }, // Updated to link to Testimonials section
  { label: "Team", href: "#" },
];

export const testimonials = [
  {
    user: "Nadan Coconut Flakes",
    image: user1,
    text: "The advertisement motion graphics video you created for us was fantastic! The workflow was smooth, the quality was top-notch, and the communication was excellent throughout the project.",
  },
  {
    user: "Manickavasagam & Associates",
    image: user2,
    text: "The responsive website you developed for our HR consultancy is amazing. We're really impressed with its performance and the SEO optimization. Great job!",
  },
  {
    user: "Bliend",
    image: user3,
    text: "We loved the logo animation video and posters! Your creativity and professionalism really shone through. Thanks for bringing our vision to life!",
  }
];

export const features = [
  {
    icon: <ScissorsLineDashed />,
    text: "Video Editing",
    description:
      "Edit like a pro and make your brand shine with our comprehensive video editing services.",
  },
  {
    icon: <PanelTop />,
    text: "Web Development",
    description:
      "Build responsive and engaging websites with ShineUp’s expert web development services.",
  },
  {
    icon: <ShieldHalf />,
    text: "SEO",
    description:
      "Rank higher and attract more customers with ShineUp’s comprehensive SEO services, focusing on best practices that deliver measurable results and maximize your online presence.",
  },
  {
    icon: <PenTool />,
    text: "Graphic Design",
    description:
      "Transform ideas into visual masterpieces with ShineUp’s expert graphic design solutions, tailored to reflect your brand’s unique personality and resonate with your target audience.",
  },
  {
    icon: <Rotate3d />,
    text: "3D Modeling",
    description:
      "Bring your concepts to life with ShineUp’s advanced 3D modeling services, where we turn your ideas into detailed and realistic visual representations for projects of any scale.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const PortfolioOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
