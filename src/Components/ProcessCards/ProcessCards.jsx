import React from "react";
import {
  FaFileAlt,
  FaObjectGroup,
  FaLaptopCode,
  FaTruck,
} from "react-icons/fa"; // Importing icons

const ProcessCards = () => {
  const items = [
    {
      icon: <FaFileAlt className="text-4xl text-cyan-500" />, // Icon for Planning
      title: "Planning",
      description:
        "Identify the app's purpose, features, and technology stack by researching and outlining key objectives.",
    },
    {
      icon: <FaObjectGroup className="text-4xl text-cyan-500" />,
      title: "Design",
      description:
        "Create user-friendly UI/UX designs and prototypes, ensuring a visually appealing and responsive interface.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-cyan-500" />,
      title: "Development",
      description:
        "Build the frontend and backend, integrate APIs, and set up the database to implement the app's functionality.",
    },
    {
      icon: <FaTruck className="text-4xl text-cyan-500" />,
      title: "Delivery",
      description:
        "Test the app for bugs and performance issues, deploy it to a hosting platform, and monitor for ongoing improvements.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 uppercase">Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 space-y-4"
            >
              <div className="flex items-center justify-center">{card.icon}</div>
              <h3 className="text-2xl font-bold uppercase mb-2">{card.title}</h3>
              <p className="text-gray-600 md:text-xl text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessCards;
