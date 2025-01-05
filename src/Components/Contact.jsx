import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container container-fluid-sm container" id="Contact">
      <div className="row align-items-center">
        <motion.div 
          className="col-md-6 contact-img-container"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <img 
            src="/1736070862633mdii6v05.png" 
            alt="Contact Us" 
            className="contact-img img-fluid" 
          />
        </motion.div>
        <motion.div 
          className="col-md-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="mb-4">Get in Touch</h2>
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn btn-outline-info"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
