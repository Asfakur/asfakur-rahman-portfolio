import React from "react";

const Hero = () => {
  return (
    <div className="bg-light">
      <div className="row container-fluid">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <h1>I am Asfakur Rahman</h1>
            <h3>Junior Web developer</h3>
            <p>
              I am Passionate to build quality web app using latest technology
              like ReactJs, Bootstrap, Firebase, node.js, express.js, mongodb
              etc.
            </p>
            <a
              href="https://drive.google.com/file/d/14ZnuX9_nwsaCKgPHw8M0WckN31__kqbI/view?usp=sharing"
              className="btn btn-warning text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="col-md-6 p-5 text-center">
          <img
            className="rounded-circle"
            src="https://i.ibb.co/D1LTd5F/saikat-Profile.jpg"
            width="350px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
