import React from "react";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="bg-red text-blac py-6  w-full mt-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.instagram.com/asllah_/profilecard/?igsh=YmdldDdzZmdpcmpm" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/aslahc" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aslahc" // Replace with your GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/aslahc/" // Replace with your LeetCode link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LeetCode
            </a>
          </div>
          <p className="text-gray-400 mb-2">Email: aslahcq@gmail.com</p>{" "}
          {/* Replace with your email */}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
