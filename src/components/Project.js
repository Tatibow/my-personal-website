import React from "react"

function Project({id, name, about, link}) {

   return (

       <div id="project">
              <h2>{name}</h2>
               <p>{about}</p>
               <a href={link}>{name} Link</a>
         </div>

   )
}

export default Project
