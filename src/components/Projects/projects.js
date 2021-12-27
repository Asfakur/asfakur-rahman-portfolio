import React from 'react';
import { useHistory } from 'react-router';
import projectsData from '../../Data/projectsData';
import ProjectDetails from './ProjectDetails';

const Projects = () => {

    const history = useHistory();

    const seeProjects = () => {
        history.push('/projects');
    }

    return (
        <section className='bg-light'>
            <h1 className="text-center py-5">My Recent Projects</h1>
            <div className="row container-fluid">
                {
                    projectsData.map(project => <ProjectDetails key={project.id} project={project} seeProjects={seeProjects}></ProjectDetails>)
                }
            </div>

        </section>
    );
};

export default Projects;