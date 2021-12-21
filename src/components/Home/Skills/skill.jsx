import React from "react";
import BackEndLottie from "../../Lotties/lottiesTemplate/backendLottie";
import FrontEndLottie from "../../Lotties/lottiesTemplate/frontendLottie";
import FrontEndIconsPalette from "./frontEndIconsPalette";

const Skill = () => {
  
  return (
    <div>
      <div className="row container-fluid">
        <div className="col-md-6">
          <h1>Front-End Development</h1>
         <FrontEndIconsPalette/>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ height: "450px", width: "450px" }}>
            <FrontEndLottie />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ height: "450px", width: "450px" }}>
            <BackEndLottie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
