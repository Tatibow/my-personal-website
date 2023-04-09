
import React, { useState, useEffect } from "react"
// import { Switch, Route } from "react-router-dom";
import CenterCard from './components/CenterCard';
// import NewProjectForm from "./components/NewProjectForm"
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar"
import AboutMe from "./components/AboutMe"
import ParticleBackground from 'react-particle-backgrounds'
 import './App.css';

function App() {
  // USESTATES
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState("/")

  const url = "http://localhost:3000/projects"

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  // ADDS NEW PROJECT (FORM CB FUNCTION)
    // const addNewProject = (newProject) => {
    //   const newData = [...projects, newProject]
    //   setProjects(newData)
    // }


    function getCurrentPage() {
      switch (page) {
        case "/":
          return <CenterCard url={url}/>
          case "/AboutMe":
            return <AboutMe/>
         case "/Portfolio":
        return <Portfolio projects={projects}/>
        // case "/NewProjectForm":
        // return  <NewProjectForm url={url} addNewProject={addNewProject}/>
        //  // eslint-disable-next-line
          break;
        default:
          return <h1>404 not found</h1>
      }
    }


    const settings = {
      particle: {
        particleCount: 100,
        color: "black",
        minSize: 2,
        maxSize: 4
      },
      velocity: {
        directionAngle: 0,
        directionAngleVariance: 30,
        minSpeed: 0.2,
        maxSpeed: 4
      },
      opacity: {
        minOpacity: 0,
        maxOpacity: 0.5,
        opacityTransitionTime: 5000
      }
    }

  return (
    <div className="App">
       <NavBar onChangePage={setPage}/>
       {getCurrentPage()}
          {/* <NavBar onChangePage={setPage}/>
          <Portfolio projects={projects}/>
           <NewProjectForm url={url}/>
           <CenterCard url={url}/> */}
            <ParticleBackground settings={settings}/>
    </div>
  );
}

export default App;
