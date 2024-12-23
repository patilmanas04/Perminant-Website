import Linkedin from "../components/icons/Linkedin";
import Instagram from "../components/icons/Instagram";
import X from "../components/icons/X";
import Facebook from "../components/icons/Facebook";
import Phone from "../components/icons/Phone";
import Email from "../components/icons/Email";
import Location from "../components/icons/Location";
import LogoWhite from "../components/icons/LogoWhite";

export const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    icon: <Linkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: <Instagram />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <X />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <Facebook />,
  },
];

export const heroSectionContent = {
  title: "Your Vision. Our Creation.",
  subtitle: "Reach Out To Book your launchpad to Success",
  descripion:
    "At Perminant, we deliver exceptional solutions with precision and expertise. Driven by excellence, we transform ideas, building long-lasting partnerships along the way. Trust us to elevate your business.",
  ctaButton: "Explore Our Services",
  hero_image: "/assets/hero_image.webp",
};

export const aboutUsContent = {
  title: "Who Are We?",
  subtitle: "Young Enthusiasts who can do ANYTHING",
  descriptionPara1:
    "We are a group of creators, working together to create revolutionary products. Innovation and creativity is what drives our team. We believe that we can achieve anything. We know we can make you believe this too.",
  descriptionPara2:
    "Our mission is to empower businesses with cutting-edge technology and design, ensuring every project is a step towards your growth.",
  about_image: "/assets/about_image.webp",
};

export const servicesContent = {
  services: [
    {
      title: "Custom Websites",
      subtitle: "Custom Websites That Work for You",
      description:
        "We craft visually stunning, fully responsive websites designed to captivate your audience and drive results. With a focus on user-friendly interfaces and seamless navigation, our solutions are tailored to elevate your brand and achieve your business objectives.",
      image: "/assets/custom_website_image.webp",
    },
    {
      title: "Interactive Applications",
      subtitle: "Innovative Mobile Applications",
      description:
        "Develop scalable, user-friendly mobile apps tailored to your business needs, ensuring a seamless experience for your customers.",
      image: "/assets/interactive_applications_image.webp",
    },
    {
      title: "Professional Graphics",
      subtitle: "Designs That Captivate",
      description:
        "Stand out with creative and impactful designs that reflect your brand’s identity.",
      image: "/assets/professional_graphics_image.webp",
    },
  ],
};

export const contactUsContent = {
  contactDetails: [
    {
      title: "Phone",
      details: ["+91 828212345", "+91 828212345"],
      icon: <Phone />,
    },
    {
      title: "Email",
      details: ["perminant@gmail.com"],
      icon: <Email />,
    },
    {
      title: "Address",
      details: ["Tentative, Surat, Gujarat, India"],
      icon: <Location />,
    },
  ],
  contact_bg: "/assets/contact_bg.webp",
};

export const footerContent = {
  logo: <LogoWhite />,
  contactDetails: [
    {
      icon: <Phone />,
      title: "+91 828212345, +91 828212345",
    },
    {
      icon: <Email />,
      title: "perminant@gmail.com",
    },
    {
      icon: <Location />,
      title: "Tentative, Surat, Gujarat, India",
    },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        href: "#home",
      },
      {
        name: "About Us",
        href: "#about",
      },
      {
        name: "Services",
        href: "#services",
      },
      {
        name: "Contact",
        href: "#contact",
      },
    ],
  },
  copyright: "© 2021 Perminant. All rights reserved.",
};
