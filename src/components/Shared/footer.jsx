import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInfoCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 bg-secondary">
      <div className="row text-white container-fluid">
        <div className="col-md-6 d-flex justify-content-center p-3 my-3">
          <a
            className="h2 px-3"
            href="https://www.facebook.com/asfakur.rahman.7374/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook color="#2AA4F4" />
          </a>
          <a
            className="h2 px-3"
            href="https://github.com/Asfakur"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub color="white" />
          </a>
          <a
            className="h2 px-3"
            href="https://www.linkedin.com/in/asfakur-rahman/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin color="#0288D1" />
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center my-3">
          <div>
            <h5>
              <FaInfoCircle /> Contact Info
            </h5>
            <p>Dhaka Cantonment Dhaka-1206</p>
            <p>Email: saikat.fix@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="text-center text-white">
        <p>
          Asfakur-Rahman | &copy; {new Date().getFullYear()} --- All rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
