import React from 'react';
import currency from '../../assets/images/currency-converter.jpg'
import blog from '../../assets/images/blog.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Modern Blogging Platform',
      description: " It's a project where user can create account and can publish different types blog with the title, image.. User can also continue CRUD operation in this project, real-time updates, SEO optimization are professionally handle in this project.",
      image1: blog,
      link: 'https://github.com/Nayan1234l',
    },
    {
        title: 'E-Learning System',
        description: " E-learning System is a digital platform designed to facilitate online education and learning.Here User can create account and after login ,In home page User can see all the courses and can access the courese. User can also add new courses in the platform and later can Edit or Delete the courses.Witout login User can not access materials .Only the person create course can have access Edit and Delete  ",
        image2: 'project1.jpg',
        link: 'https://github.com/Nayan1234l/E-learning-system',
      },
      {
        title: 'E-commerce site',
        description: " I have just completed a E-commerce site where I used React for front-end and firebase for backend.. Its a site where everything is developed which contain a modern E-commerce site ",
        image3:'',
        link: 'https://github.com/Nayan1234l',
      },
      {
        title: 'Todo ',
        description: " It's an app where User can Add todo,Delete todo,Update todo.. The main twist of this app is using Context-Api ..After refresh the page todo list will be not eliminated. Another feature is using loacal storage and see the todo list in local storage..I hope user will like it  ",
        image3:'',
        link: 'https://github.com/Nayan1234l/Todos-React',
      },
      {
        title: 'Currency-Converter',
        description: " Currency Converter is a simple app where User can convert the money one currency to another currency. By default I keep it $USD to BDT..User also can swap the currency at a time. ",
        image4: currency,

        link: 'https://github.com/Nayan1234l/Currency-Converter-using-react.js',
      },
    // Add more projects here
  ];

  return (
    // <div><h2 className="text-center font-bold">My Projects</h2>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <div
      key={index}
      className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1"
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
      <p className="text-gray-600 mb-6">{project.description}</p>
      {/* <img src=[{project.image4}{project.image1}] alt={project.title1}{project.title4} /> */}
      {/* <img src={project.image1} alt={project.title} /> */}
      {/* <img src={project.image4} alt={project.title} /> */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-blue-500  hover:text-orange-700 transition duration-300"
      >
        View on GitHub
      </a>
    </div>
  ))}
</div>


  )  
};

export default Projects;
