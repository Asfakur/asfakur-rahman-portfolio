import React from "react";
import SkillsWithIcons from "./skillsWithIcons";
import frontEndSkills from "../../../Data/frontEndSkills";

const FrontEndIconsPalette = () => {
  return (
    <div>
      <h1>Front-End Skills</h1>
      <SkillsWithIcons skills={frontEndSkills} />
    </div>
  );
};

export default FrontEndIconsPalette;
