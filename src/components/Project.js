import React from "react"

function Project({id, name, image,about, link}) {

   return (
       <li className="project">
            <img src={image} alt="dummy project pic"/>
              <h3>{name}</h3>
               <p>{about}</p>
               <a href={link}>{name} Link</a>
         </li>
   )
}

export default Project
