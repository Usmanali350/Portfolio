import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const serviceData = [
  { 
    title: 'Frontend Development', 
    description: 'Building responsive and engaging user interfaces using React.js, HTML5, CSS3, and modern JavaScript. I focus on creating a seamless user experience across all devices, optimizing performance, and ensuring accessibility standards.' 
  },
  { 
    title: 'Backend Development', 
    description: 'Creating robust and scalable server-side applications with Node.js and Express. I design RESTful APIs, integrate databases like MongoDB, and ensure the backend is optimized for performance and security.' 
  },
  { 
    title: 'UI/UX Design', 
    description: 'Designing intuitive and user-friendly interfaces for web and mobile applications. My process involves wireframing, prototyping, and conducting user research to ensure the design is both functional and aesthetically pleasing.' 
  },
  { 
    title: 'Full-Stack Development', 
    description: 'Combining frontend and backend expertise to deliver complete web solutions. I specialize in creating dynamic, responsive websites with React for the frontend, and Node.js and MongoDB for the backend.' 
  }
];

const Services = () => {
  return (
    <div className="services-container container-fluid-sm container" id="Services">
      <div className="row">
        <h2 style={{textAlign:'center'}}>Our <span style={{color:'aqua'}}>Services</span></h2>
        {serviceData.map((service, index) => (
          <motion.div 
            key={index} 
            className={`col-md-5 service-box ms-lg-4 me-lg-4 ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ marginBottom: '40px', transition: 'transform 0.3s ease, box-shadow 0.3s ease', textAlign: index % 2 === 0 ? 'left' : 'left' }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(103, 253, 246, 0.5)' }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
