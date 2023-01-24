import React from "react"
import Project from "./Project"

function Portfolio({ projects }) {

    const projectCard = projects.map(project => {
        return <Project
            id={project.id}
            name={project.name}
            about={project.about}
            link={project.link}
            key={project.id}
        />
    })

    return (
            <>
        <div className="projects">
        <h1 id="projects-heading">Projects</h1> <br/>
         {projectCard}
        </div>
        </>
    )
}

export default Portfolio
