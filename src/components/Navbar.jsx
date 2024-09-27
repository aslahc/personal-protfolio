import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 font-['Poppins', sans-serif]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-xl">
          aslah
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
