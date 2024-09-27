import React from "react";

const LandingPage = () => {
  const handleConnectClick = () => {
    window.location.href = "mailto:aslahcq@gmail.com";
  };

  return (
    <section id="home">
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
        {/* Add your rounded image here */}
        <img
          src="https://media.licdn.com/dms/image/D5603AQEXqXb18oa8Yw/profile-displayphoto-shrink_400_400/0/1716964301781?e=2147483647&v=beta&t=6n1Oool3mBTtvhMFk0TV4bX0YXsVzVCkLckx3T7Um84" // Replace with the actual path to your image
          alt="Aslah"
          className="rounded-full w-32 h-32 mb-4" // Adjust size as needed
        />

        <h2 className="text-xl fredoka-navbar font-medium">Hi, I'm Aslah</h2>
        <h1 className="text-4xl fredoka-navbar mt-2">MERN STACK Developer</h1>
        <button
          onClick={handleConnectClick}
          className="bg-black fredoka-navbar font-bold text-neutral-200 rounded-lg mt-4 px-4 py-2"
        >
          Connect
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
