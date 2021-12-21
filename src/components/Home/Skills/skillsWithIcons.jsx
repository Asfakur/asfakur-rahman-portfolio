import React from "react";
import _ from "lodash";
const SkillsWithIcons = ({ skills }) => {
  const getValue = (object, targetValue) => {
    return _.get(object, targetValue);
  };
  return (
    <div>
      {skills.map((skill) => (
        <div
          className="d-flex align-items-center"
          key={getValue(skill, "name")}
          title={getValue(skill, "name")}
        >
          <h2
            className="crp"
            style={{
              color: getValue(skill, "color"),
            }}
            key={getValue(skill, "name")}
          >
            {getValue(skill, "icon")}
          </h2>
          <span className="mt-1 ms-1">{getValue(skill, "expertise")}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsWithIcons;
