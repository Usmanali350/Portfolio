import React from "react";
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import "./Skills.css";

export const Skills = () => {
  const technicalSkills = [
    { skill: "MongoDB", percent: 90, icon: <Icon icon="skill-icons:mongodb" className="progress-icon bordered-icon" /> },
    { skill: "Express.js", percent: 85, icon: <span className="express-icon p-2 rounded-circle bordered-icon">Ex</span> },
    { skill: "React.js", percent: 95, icon: <Icon icon="logos:react" className="progress-icon bordered-icon" /> },
    { skill: "Node.js", percent: 88, icon: <Icon icon="logos:nodejs-icon" className="progress-icon bordered-icon p-2" /> },
  ];

  const professionalSkills = [
    { skill: "Creativity", percent: 90, icon: null },
    { skill: "Communication", percent: 75, icon: null },
    { skill: "Problem Solving", percent: 80, icon: null },
    { skill: "Teamwork", percent: 85, icon: null },
  ];

  return (
    <div className="container skills-container py-5" id="Skills">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5">
          <h2 className="text-center mb-4">Technical <span style={{ color: "aqua" }}>Skills</span></h2>
          {technicalSkills.map((item, index) => (
            <motion.div
              key={index}
              className="progress-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <div className="progress-icon-container">
                {item.icon}
              </div>
              <div className="progress thin-bar">
                <div
                  className="progress-bar"
                  style={{ width: `${item.percent}%` }}
                >
                  {item.percent}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="col-lg-6 col-sm-12 skill-ring-wrapper">
          <h2 className="text-center w-100 mb-4">Professional <span style={{ color: "aqua" }}>Skills</span></h2>
          <div className="row">
            {professionalSkills.map((item, index) => (
              <motion.div
                className="col-6 text-center"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div
                  className="skill-ring"
                  style={{ "--percent": item.percent }}
                >
                  <div className="ring-inner">
                    {item.percent}%
                  </div>
                </div>
                <div className="skill-text">{item.skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
