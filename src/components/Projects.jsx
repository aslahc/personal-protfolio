import React from "react";

const Projects = () => {
  // Sample project data
  const projectData = [
    {
      id: 1,
      title: "Social-Media Platform - Socialbook",
      description: "chatting, video call, graph, story ",
      link: "https://www.aslah.online/home", // Live demo link
      github: "https://github.com/aslahc/socialbook", // GitHub link
      thumbnail:
        "https://github.com/user-attachments/assets/0b3c70ab-086f-40ea-8005-6456cd5872ba", // Replace with actual thumbnail URL
    },
    {
      id: 2,
      title: "E-commerce-Flock",
      description: "Payment-gateway, order, sale-report, inoice, cart",
      link: "https://flockclothes.online/", // Live demo link
      github: "https://github.com/aslahc/E-commerce-project", // GitHub link
      thumbnail:
        "https://github.com/aslahc/E-commerce-project/blob/main/Screenshot%202024-07-12%20002347.png?raw=true", // Replace with actual thumbnail URL
    },
    {
      id: 3,
      title: "Tic Tac Toe- Game",
      description: "Multiplayer, socket io",
      link: "https://tic-tac-toe-gold-three.vercel.app/", // Live demo link
      github: "https://github.com/aslahc/tic-tac-toe", // GitHub link
      thumbnail:
        "https://camo.githubusercontent.com/2f43c17180ffb09b434517a860735b74330e664e65f803f676c862e53f302ab9/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f596e424f5045354c7933412f6d617872657364656661756c742e6a7067", // Replace with actual thumbnail URL
    },
    {
      id: 4,
      title: " Netflix Clone",
      description: "developer a netflix clone ",
      link: "https://clone-project-peach.vercel.app/", // Live demo link
      github: "https://github.com/aslahc/netflix-clone-react", // GitHub link
      thumbnail:
        "https://github.com/aslahc/netflix-clone-react/blob/main/Screenshot%202024-07-12%20001757.png?raw=true", // Replace with actual thumbnail URL
    },
    {
      id: 5,
      title: "Dashboard",
      description: "Dummy dashboard ",
      link: "https://eltdashboard.vercel.app/", // Live demo link
      github: "#", // GitHub link
      thumbnail:
        "https://github.com/aslahc/elt-global-assessment/blob/main/public/Screenshot%202024-08-10%20130456.png?raw=true", // Replace with actual thumbnail URL
    },
    {
      id: 6,
      title: " URLShortener",
      description: "convert long url to short url",
      link: "https://url-short-client.vercel.app/", // Live demo link
      github: "https://github.com/aslahc/URL_SHORT", // GitHub link
      thumbnail:
        "https://github.com/aslahc/URL_SHORT/blob/main/Screenshot%202024-07-10%20220004.png?raw=true", // Replace with actual thumbnail URL
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 font-semibold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
