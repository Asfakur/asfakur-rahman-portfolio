import React from 'react';

const ProjectDetails = (props) => {
    const {project} = props; 
    
    return (
        <div onClick={() => props.seeProjects()} className="col-md-4 text-center">
            <img className="rounded" src={project.img} height="350px" width="350px" alt=""/>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetails;