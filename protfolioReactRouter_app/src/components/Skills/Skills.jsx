// ServicesPage.js
import React from "react";

const Skills = () => {
  const servicesData = [
    {
      title: "JavaScript",
      description:
        "As JavaScript developer with a passion for crafting dynamic and interactive web applications. With a keen eye for detail and a deep understanding of JavaScript,  specializes in creating elegant and efficient solutions for a variety of projects. My commitment to delivering high-quality code and innovative web experiences sets him apart as a dedicated and forward-thinking JavaScript developer.",
      
    },
    {
      title: "React",
      description: "Hey,I'm skilled React developer who excels in building dynamic and responsive web applications. With a strong foundation in React and its ecosystem,  dedicated to delivering top-notch solutions for a wide range of projects. And Yes, commitment to creating engaging and user-friendly web experiences establishes me as a forward-thinking and highly proficient React developer.",
      
    },
    {
      title: "Problem Solving",
      description: "I have been solving problem in Codeforces,Leetcodes,Beecrowd,Hackerrank since 2020 ..",
      
    },
    // Add more services as needed
  ];
  

  return <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200">
  <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Skills</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {servicesData.map((service, index) => (
      <div
        key={index}
        className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h2>
        <p className="text-gray-600">{service.description}</p>
      </div>
    ))}
  </div>
</div>



};

export default Skills;
