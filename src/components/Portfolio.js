import React from "react"
import Project from "./Project"

function Portfolio({ projects }) {

    const projectCard = projects.map(project => {
        return <Project
            id={project.id}
            name={project.name}
            image={project.image}
            about={project.about}
            link={project.link}
            key={project.id}
        />
    })

    return (
            <>
        <h1 id="projects-heading">Projects</h1> <br/>
        <ul className="projects">
         {projectCard}
        </ul>
        </>
    )
}

export default Portfolio
