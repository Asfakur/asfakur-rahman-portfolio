import React from "react";
import SkillsWithIcons from "./skillsWithIcons";
import frontEndSkills from "../../../Data/frontEndSkillsArray";

import BackEndLottie from "../../Lotties/lottiesTemplate/backendLottie";

const BackEndSkills = () => {
  return (
    <React.Fragment>
      <h1 className="text-center my-5">Back-End Development</h1>

      <div className="col-md-6 d-flex  justify-content-center">
        <div className="d-flex align-items-center justify-content-center mt-5" style={{ height: "450px", width: "450px" }}>
          <BackEndLottie />
        </div>
      </div>

      <div className="col-md-6 d-flex align-items-center justify-content-center">
        {/* <h3>Front-End Skills</h3>; */}
        <SkillsWithIcons skills={frontEndSkills} />
      </div>
    </React.Fragment>
  );
};

export default BackEndSkills;
