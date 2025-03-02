import { Instagram, Linkedin, Mail } from "lucide-react";
// import { FaTwitter, FaLinkedin, FaDribbble, FaInstagram } from "react-icons/fa";
import ButtonWithIcon from "./ButtonWithIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-5 px-5 text-center">
      <h2 className="text-4xl font-semibold">
        Let’s <span className="text-gray-700">Connect</span>
      </h2>
      <p className="text-gray-500 mt-2 max-w-4xl mx-auto md:py-7 text-sm md:text-base">
        Passionate about crafting seamless user experiences, building
        interactive web applications, or exploring the latest in frontend
        development? Feel free to connect—let’s innovate together!
      </p>

      {/* LinkedIn Button */}
      <div className="mt-5">
        <ButtonWithIcon href="https://www.linkedin.com/in/mohmmdarif">
          <Linkedin />
          Get In Touch
        </ButtonWithIcon>
      </div>

      <div className="bg-gray-600 bg-opacity-10 w-full h-[2px] rounded-full mt-10"></div>
      <div className="md:flex md:flex-row-reverse justify-between items-center md:p-10">
        {/* Social Media Icons */}
        <div className="mt-8 md:mt-0 flex justify-center gap-6 text-gray-500 text-2xl">
          <a
            href="mailto:nadianugrahani18200@gmail.com"
            className="hover:text-gray-700"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/nadianugrahani21/"
            className="hover:text-gray-700"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/nadiangrhni21/"
            className="hover:text-gray-700"
          >
            <Instagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-0 text-gray-400 text-sm">
          © 2024 Nadia Nugrahani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
