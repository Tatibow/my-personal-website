import React from "react"

function Project({id, name, image,about, github_link, demo, tech}) {


   return (
       <li className="project">
            <img src={image} alt="project pic"/>
              <h3>{name}</h3>
               <p>{about}</p>
               <p>{tech}</p>
               <a href={github_link}>{name} Github Link</a> <br/>
               <a href={demo}>{demo === "" ? null : name + " demo"}</a>
         </li>
   )
}

export default Project
