import React from "react";

const Skills = () => {
  return (
    <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* About Content */}

      {/* Skills Section */}
      <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-1">
        {/* Front-End Developer */}
        <div className="flex items-start mb-6 md:mb-0">
          <div className="flex items-center justify-center w-16 h-16 bg-black rounded-full text-white">
            <span className="text-5xl">🌐</span>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Front-End Developer</h4>
            <p className="text-gray-600">
              React.js, JavaScript, TypeScript, HTML5, CSS3, Redux, Bootstrap,
              Tailwind CSS, jQuery, Figma
            </p>
          </div>
        </div>

        {/* Back-End Developer */}
        <div className="flex items-start">
          <div className="flex items-center justify-center w-14 h-14 bg-black rounded-full text-white">
            <span className="text-5xl">🌩️</span>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">Back-End Developer</h4>
            <p className="text-gray-600">
              Node.js, Express.js MongoDB, MySQL, RESTful APIs (Postman),
              Socket.IO,Data Structures and Algorithms, AWS, Nginx, EC2, CI/CD
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center mb-8">
          I excel in engineering meticulously designed, maintainable code while
          thriving in collaborative environments. Eager to engage in digital
          transformation initiatives, I continually strive to enhance my
          expertise and contribute meaningfully to projects that drive success.
        </p>
        <div className="flex justify-center mt-8 col-span-2">
          <div className="text-center mx-4">
            <h4 className="text-2xl font-bold">7+</h4>
            <p>Projects completed</p>
          </div>
          <div className="text-center mx-4">
            <h4 className="text-2xl font-bold">1+</h4>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      {/* Project Stats */}
    </div>
  );
};

export default Skills;
