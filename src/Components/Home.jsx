import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const words = ['WEB DEVELOPER', 'WEB DESIGNER', 'UI/UX DESIGNER'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingInterval = setInterval(handleTyping, 150);
    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="home-container container-fluid-sm ps-lg-5" id="Home">
      <div className="row w-100">
        
        <motion.div
          className="col-lg-6 col-md-12 text-left left-side"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: 'easeOut' }} 
        >
          <h1 className="intro-text">
            Hello, It's Me
            <br />
            <span className="name">Usman Ali</span>
            <br />
            And I'm a <span className="dynamic-text">{displayedText}</span>
          </h1>
          <p className="description">
            I specialize in creating stunning, responsive websites and user-friendly interfaces. Let's build something amazing together!
          </p>
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(103, 253, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div
          className="col-lg-6 col-md-12 text-center right-side mt-sm-5 mb-sm-5"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.img
            src="/imgg.jpg"
            alt="Usman Ali"
            className="profile-image"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
