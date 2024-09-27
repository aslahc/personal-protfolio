import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white w-full mx-4 md:w-7/12 h-20 rounded-lg sticky top-4 mx-auto flex items-center px-4 shadow-md z-50 ">
      {/* Left Side (Aslah) */}
      <h1 className="text-black text-2xl pl-5 fredoka-navbar flex-grow text-left cursor-pointer">
        aslah
      </h1>

      {/* Right Side (Home and Contact) */}
      <div className="flex space-x-6 pr-6">
        <a
          href="#home"
          className="text-black text-lg fredoka-navbar cursor-pointer hover:text-green-500 transition duration-200"
          aria-label="Home"
        >
          Home
        </a>
        <a
          href="#contact"
          className="text-black text-lg fredoka-navbar cursor-pointer hover:text-green-500 transition duration-200"
          aria-label="Contact"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
