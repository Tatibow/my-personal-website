import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Project({id, name, images, about, github_link, demo, tech}) {


   return (
      <div className="project">
            <li>
                  <Carousel>
                        {images.map(image => {
                        return <img src={image} alt="project pic" key={image}/>
                        })}
                  </Carousel>
              <h3>{name}</h3>
               <p>{about}</p>
               <p>{tech}</p>
               <a  href={github_link}>{name} Github</a> <br/>
               <a href={demo}>{demo === "" ? null : name + " demo"}</a>
            </li>
      </div>
   )
}

export default Project
