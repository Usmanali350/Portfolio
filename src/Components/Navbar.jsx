import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <motion.a
          className="navbar-brand"
          href="#Home"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, color: "#00FFFF", transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="public/99e9848a-f3dc-4e15-ad0c-4b853b89825c.webp" width={120} className="rounded-circle" height={50} alt="" />
        </motion.a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
