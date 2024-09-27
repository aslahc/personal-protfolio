import React from "react";

const LandingPage = () => {
  return (
    <div className=" h-screen flex m-36">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold">
          <span className="text-green-400">HE</span>
          <span className="text-white">LLO,</span>
        </h1>
        <h2 className="text-white text-4xl mt-4 mb-8">
          I'm a Full Stack Developer
        </h2>
        <button className="bg-green-400 text-gray-900 px-8 py-3 rounded-full text-xl font-semibold hover:bg-yellow-300 transition duration-300">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
