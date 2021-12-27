import React from "react";
import {
  FaCheckCircle,
  FaRegFileCode,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Specialty = () => {
  return (
    <div className="row container-fluid d-flex justify-content-around pb-5">
      <div className="bg-primary text-white col-md-3 rounded text-center p-3 m-3 shadow-lg hc">
        <h2>
          <FaCheckCircle />
        </h2>
        <h3>Honest & Friendly</h3>
        <p>
          I try to match words and deeds. I try to listen and understand the
          problem and express my friendly attitude towards everyone as per the
          need
        </p>
      </div>
      <div className="bg-dark text-white col-md-3 rounded text-center p-3 m-3 shadow-lg hc">
        <h2>
          <FaRegFileCode />
        </h2>
        <h3>Clean Code</h3>
        <p>
          Clean, maintainable, and reusable source code by refactoring.
          Meaningful comments for explaining code
        </p>
      </div>
      <div className="bg-info text-white col-md-3 rounded text-center p-3 m-3 shadow-lg hc">
        <h2>
          <FaChalkboardTeacher />
        </h2>
        <h3>Enthusiastic to latest Technology</h3>
        <p>
          I regularly increase my technological skills and am always interested
          in new frameworks and technology.
        </p>
      </div>
    </div>
  );
};

export default Specialty;
