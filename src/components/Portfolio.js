import React from "react"
import Project from "./Project"

function Portfolio({ projects }) {

    const projectCard = projects.map(project => {
        return <Project
            id={project.id}
            name={project.name}
            image={project.image}
            about={project.about}
            github_link={project.github_link}
            demo={project.demo}
            tech={project.tech_used}
            key={project.id}
        />
    })

    return (
            <>
        <h1 className="topSpaceDefault" id="projects-heading">Projects</h1>
        <ul className="projects">
         {projectCard}
        </ul>
        </>
    )
}

export default Portfolio
