import React from 'react';
import './Top.css';

const Top = () => {
    return (
        <div className="row container-fluid top-banner bg-secondary">
            <div className="col-md-6 d-flex align-items-center">
                <div className="text-white">
                    <h1>I am Asfakur Rahman</h1>
                    <h3>Junior Web developer</h3>
                    <p>I am Passionate to build quality web app using latest technology like ReactJs, Bootstrap, Firebase, node.js, express.js, mongodb etc.</p>
                    <a href="https://drive.google.com/file/d/14ZnuX9_nwsaCKgPHw8M0WckN31__kqbI/view?usp=sharing" className="btn btn-success">Download Resume</a>
                </div>
            </div>
            <div className="col-md-6 p-5 text-center">
                <img className="rounded-circle profile-pic shadow" src="https://i.ibb.co/nfXdvwC/Saikat.png" width="350px" alt="" />
            </div>
        </div>
    );
};

export default Top;