import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import GitHubIcon from "@material-ui/icons/GitHub";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

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
               <a  href={github_link}><GitHubIcon/></a> 
               <a href={demo}>{demo === "" ? null :<OndemandVideoIcon/>}</a>
            </li>
      </div>
   )
}

export default Project
