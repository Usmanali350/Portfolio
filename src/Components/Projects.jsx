import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectData = [
  {
    title: 'Dish Delight Restaurant',
    description: 'A full-featured restaurant website showcasing delicious dishes with an engaging UI.',
    link: 'https://github.com/Usmanali350/Dishdelight-Restorent-Project'
  },
  {
    title: 'Historical Places of Pakistan',
    description: 'A project highlighting famous historical landmarks in Pakistan, using React and Bootstrap.',
    link: 'https://github.com/Usmanali350/Historical-Places-Project'
  },
  {
    title: 'URL Shortener',
    description: 'A simple and efficient URL shortener built with MERN stack for shortening long URLs.',
    link: 'https://github.com/Usmanali350/URL-Shortener-Project'
  },
  {
    title: 'Age Calculator',
    description: 'A dynamic age calculator that allows users to calculate their age accurately by inputting their date of birth.',
    link: 'https://github.com/Usmanali350/Age-Calculator'
  }
];

const Projects = () => {
  return (
    <div className="projects-container container-fluid-sm container" id="Projects">
      <h2 className="text-center mb-5">My <span style={{color:'aqua'}}>Projects</span></h2>
      <div className="row">
        {projectData.map((project, index) => (
          <motion.div 
            key={index} 
            className="col-md-5 project-box ms-lg-4 me-lg-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(103, 253, 246, 0.5)' }}
            style={{ marginBottom: '40px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', textAlign: 'center' }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="btn btn-outline-info mt-3" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;