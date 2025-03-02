import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonWithIcon from "./ButtonWithIcon";
import { Menu, X, ArrowUpRight, Linkedin } from "lucide-react";

import { menuItems, brand } from "@/mocks/index";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="w-full flex justify-between items-center px-6 lg:px-16 h-16 lg:h-24 z-50 absolute top-0 left-0 right-0">
      {/* Logo */}
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="flex gap-1 text-xl lg:text-2xl font-bold group cursor-pointer"
        href=""
      >
        {brand.map((name, index) => (
          <span key={index} className={name.className}>
            {name.name}
          </span>
        ))}
      </motion.a>

      {/* Menu for Desktop */}
      <nav className="hidden lg:flex gap-10 text-gray-700 font-medium py-4 px-5 rounded-full fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md bg-opacity-50 shadow-md shadow-gray-200">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:text-gray-900 hover:scale-110 transition-transform duration-500 delay-100 flex text-sm"
          >
            {item.name}
            <sup>
              <ArrowUpRight />
            </sup>
          </a>
        ))}
      </nav>

      {/* Button & Hamburger Menu */}
      <div className="flex items-center gap-4">
        <ButtonWithIcon
          href="https://www.linkedin.com/in/nadianugrahani21/"
          className="hidden lg:flex"
        >
          <Linkedin />
          Get In Touch
        </ButtonWithIcon>

        {/* Hamburger Icon (Mobile) */}
        <Button
          variant="outline"
          className="block lg:hidden p-2 bg-gray-50 rounded-lg"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-3/4 sm:w-2/5 bg-white shadow-lg z-50 flex flex-col items-start p-6"
          >
            <button className="self-end p-2" onClick={toggleMenu}>
              <X size={24} />
            </button>
            <nav className="mt-6 w-full flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 text-lg font-medium flex items-center gap-2"
                  onClick={toggleMenu}
                >
                  {item.name}
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </nav>

            <ButtonWithIcon
              href="https://www.linkedin.com/in/nadianugrahani21/"
              className="mt-8 w-full"
            >
              <Linkedin />
              Get In Touch
            </ButtonWithIcon>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
