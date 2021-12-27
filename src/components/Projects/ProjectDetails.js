import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = (props) => {
    const { project } = props;

    return (
        <div onClick={() => props.seeProjects()} className="col-md-4 text-center hc crp">
            <img className="rounded" src={project.img} height="350px" width="350px" alt="" />
            <h4>Project name: {project.name}</h4>
            <a
                className="btn btn-primary mx-2"
                href={project.codeLink}
                target="_blank"
                rel="noreferrer noopener"
            >
                <FaGithub color="white" /> Code
            </a>
            <a
                className="btn btn-dark mx-2"
                href={project.liveLink}
                target="_blank"
                rel="noreferrer noopener"
            >
               Live Site
            </a>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetails;