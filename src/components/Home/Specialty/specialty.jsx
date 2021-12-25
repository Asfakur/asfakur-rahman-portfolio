import React from "react";
import { FaCheckCircle, FaRegFileCode, FaChalkboardTeacher } from "react-icons/fa";

const Specialty = () => {
  return (
    <div className="row container-fluid d-flex justify-content-around pb-5">
      <div className="bg-primary text-white col-md-3 rounded text-center p-3 m-3 shadow-lg">
        <h2>
          <FaCheckCircle />
        </h2>
        <h3>Honest & Friendly</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          eveniet amet, quis nostrum nulla excepturi?
        </p>
      </div>
      <div className="bg-dark text-white col-md-3 rounded text-center p-3 m-3 shadow-lg">
        <h2>
          <FaRegFileCode />
        </h2>
        <h3>Clean Code</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          eveniet amet, quis nostrum nulla excepturi?
        </p>
      </div>
      <div className="bg-info text-white col-md-3 rounded text-center p-3 m-3 shadow-lg">
        <h2>
          <FaChalkboardTeacher />
        </h2>
        <h3>Enthusiastic to new Technology</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          eveniet amet, quis nostrum nulla excepturi?
        </p>
      </div>
    </div>
  );
};

export default Specialty;
