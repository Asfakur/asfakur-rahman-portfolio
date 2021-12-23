import React from "react";
import SkillsWithIcons from "./skillsWithIcons";
import frontEndSkills from "../../../Data/frontEndSkillsArray";
import FrontEndLottie from "../../Lotties/lottiesTemplate/frontendLottie";

const FrontEndSkills = () => {
  return (
    <React.Fragment>
      <h1 className="text-center my-5">Front-End Development</h1>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <SkillsWithIcons skills={frontEndSkills} />
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <div style={{ height: "450px", width: "450px" }}>
          <FrontEndLottie />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontEndSkills;
