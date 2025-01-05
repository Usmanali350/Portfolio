import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Edu.css'; // Make sure this file is included

const Edu = () => {
  return (
    <div id="education" className="container mt-5">
      <h2 className="text-center text-white mb-4">Education Timeline</h2>
      <div className="timeline-container">
        <div className="timeline">
          {/* Timeline Item 1 */}
          <div id="timeline1" className="timeline-item left">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5>2025 - Present</h5>
              <p>BS in Computer Science, 1st Semester</p>
              <p className="description">
                Currently enrolled in the 1st semester of BS in Computer Science. Gaining knowledge in core computer science concepts such as programming, algorithms, and data structures.
              </p>
              <a href="#timeline2" className="timeline-link">Next</a>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div id="timeline2" className="timeline-item right">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5>2024</h5>
              <p>Intermediate (FSc), 2nd Year</p>
              <p className="description">
                Completed my second year in FSc, focusing on subjects like Physics, Mathematics, and Computer Science, further strengthening my interest in technology and computing.
              </p>
              <a href="#timeline3" className="timeline-link">Next</a>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div id="timeline3" className="timeline-item left">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5>2023</h5>
              <p>Intermediate (FSc), 1st Year</p>
              <p className="description">
                Started my journey in FSc, exploring foundational subjects in science and mathematics, which set the stage for my computer science studies.
              </p>
              <a href="#timeline4" className="timeline-link">Next</a>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div id="timeline4" className="timeline-item right">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5>2021</h5>
              <p>Matriculation (10th Grade)</p>
              <p className="description">
                Completed my Matriculation with a strong focus on science and mathematics, laying the foundation for my future education in technology.
              </p>
              <a href="#timeline5" className="timeline-link">Next</a>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div id="timeline5" className="timeline-item left">
            <div className="timeline-icon"></div>
            <div className="timeline-content">
              <h5>2020</h5>
              <p>Matriculation (9th Grade)</p>
              <p className="description">
                Started my academic journey with Matriculation, excelling in the basics of science and mathematics, which sparked my interest in computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu;
