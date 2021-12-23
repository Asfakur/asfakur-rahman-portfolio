import React from "react";
import BackEndSkills from "./backEndSkills";
import FrontEndSkills from "./frontEndSkills";

const Skill = () => {
  return (
    <div>
      <div className="row container-fluid">
        <FrontEndSkills />
        <BackEndSkills />
        
      </div>
    </div>
  );
};

export default Skill;
