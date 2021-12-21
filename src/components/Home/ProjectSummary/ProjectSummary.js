import React from 'react';
import { useHistory } from 'react-router';
import projectDetails from '../../../Data/projectsData';
import ProjectDetails from './ProjectDetails';

const ProjectSummary = () => {

    const history = useHistory();

    const seeProjects = () => {
        history.push('/projects');
    }

    return (
        <section className='bg-info text-white'>
            <h1 className="text-center my-5">My Recent Projects</h1>
            <div className="row container-fluid">
                {
                    projectDetails.map(project => <ProjectDetails key={project.id} project={project} seeProjects={seeProjects}></ProjectDetails>)
                }
            </div>

        </section>
    );
};

export default ProjectSummary;