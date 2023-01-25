
import React, { useState, useEffect } from "react"
// import { Switch, Route } from "react-router-dom";
import CenterCard from './components/CenterCard';
import NewProjectForm from "./components/NewProjectForm"
import Portfolio from "./components/Portfolio"
import NavBar from "./components/NavBar"
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
    const addNewProject = (newProject) => {
      const newData = [...projects, newProject]
      setProjects(newData)
    }


    function getCurrentPage() {
      switch (page) {
        case "/":
          return <CenterCard url={url}/>
         case "/Portfolio":
        return <Portfolio projects={projects}/>
        case "/NewProjectForm":
        return  <NewProjectForm url={url} addNewProject={addNewProject}/>
         // eslint-disable-next-line
          break;
        default:
          return <h1>404 not found</h1>
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
    </div>
  );
}

export default App;
