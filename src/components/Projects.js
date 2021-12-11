import React from "react";
import '../css/projects.css';
import '../index.css';
import projects_img from '../assets/projects.svg';

import projects from '../projects_data';


const Projects=()=>{
    const heading='<Projects>'
    return(
        <>
        <div className="projects">
            <div className="heading">
                <h1 className="code-font">{heading}</h1>
                <img src={projects_img} className="hover-zoom svg"></img>
            </div>
        </div>
            <div className="parents-project" style={{paddingBlock:"4vw"}}>
                {
                    projects.map((project)=>{
                        return(
                            <div className="child-project">
                                <ProjectCard project={project} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

const ProjectCard=(props)=>{
    const {img,projectName,description,technologies,url} = props.project;
    
    return(
        <a href={url} target="_blank"><div className="projectCard">
            <div className="content-project">
                <h2>{projectName}</h2>
                <p>{description}</p>
                <div className="badge-container">
                {
                    technologies.map((tech)=>{
                        return(
                            <span className="tech-badge">
                                {tech}
                            </span>
                        )
                    })
                }
                </div>
            </div>
        </div>
        </a>
    );
}


export default Projects;