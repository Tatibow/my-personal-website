
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
  // const [projects, setProjects] = useState([])
  const [page, setPage] = useState("/")

  // const url = "http://localhost:3000/projects"
  //const url = "https://jsonkeeper.com/b/BATK"
  // const url = "https://personal-website-api-jwi8.onrender.com/projects"

  // useEffect(() => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setProjects(data))
  //  }, [])

  const projectData = [
    {
      "name": "Abeona/Adiona",
      "images": [
        "https://i.postimg.cc/g0vvGWFZ/Screenshot-42.png",
        "https://i.postimg.cc/vBY6MxtJ/Screenshot-43.png",
        "https://i.postimg.cc/VLCvxFcS/Screenshot-44.png",
        "https://i.postimg.cc/L5Z4MmGd/Screenshot-45.png",
        "https://i.postimg.cc/Xv7C6y8T/Screenshot-46.png",
        "https://i.postimg.cc/k567SJX2/Screenshot-48.png",
        "https://i.postimg.cc/GhL8yD09/Screenshot-49.png",
        "https://i.postimg.cc/8zwqzqRj/Screenshot-50.png"
      ],
      "about": "This is a travel experience review application meant to keep POC, women, and other minorities safe and comfortable while traveling.",
      "github_link": "https://github.com/Tatibow/Abeona_Adiona/tree/master",
      "demo": "https://www.loom.com/share/4d72513c4c2642438e2ca00db680cfec",
      "tech_used": "Frontend: JavaScript, React, Material-UI, vanilla CSS & Backend: Ruby, Rails, PostgreSQL, Bcrypt",
      "id": 3
    },
    {
      "name": "Tatiana's Code Challenge",
      "images": [
        "https://i.postimg.cc/vTGTH6K0/Screenshot-21.png",
        "https://i.postimg.cc/rmPNz9s6/Screenshot-38.png",
        "https://i.postimg.cc/k5hTtCYh/Screenshot-40.png",
        "https://i.postimg.cc/g21wwBqH/Screenshot-41.png"
      ],
      "about": "Tatiana's code challenge was created with 2 other amazing developers meant to give you small coding exercises once a day. ",
      "github_link": "https://github.com/Irishwolf13/Project3",
      "demo": "https://www.loom.com/share/816e468444e8412e8eaef021440c5585",
      "tech_used": "Frontend: JavaScript, React, Tail wind & Backend: Ruby, ActiveRecord, and Sinatra",
      "id": 4
    },
    {
      "id": 5,
      "name": "Safari Sorority",
      "images": [
        "https://i.postimg.cc/SQ7sDD6P/Screenshot-16.png",
        "https://i.postimg.cc/qMs0cDTG/Screenshot-35.png",
        "https://i.postimg.cc/BQB9P8TY/Screenshot-36.png"
      ],
      "about": "The Safari Sorority is designed for users to create, search through, and view the various social media posts made for any animal you can think of! Focusing on front-end development, this project was designed to apply our team's skills working with React in a fun and creative way.",
      "github_link": "https://github.com/KlajdoQ/safari-sorority",
      "demo": "https://www.loom.com/share/38795b035a0d4365b0010e402de4391d",
      "tech_used": "JavaScript, React, CSS, and Json-server for data"
    },
    {
      "id": 6,
      "name": "Founder's House Coffee Shop",
      "images": [
        "https://i.postimg.cc/9M44BGSk/Screenshot-29.png",
        "https://i.postimg.cc/s2C7mpTD/Screenshot-15.png",
        "https://i.postimg.cc/X71TRdDL/Screenshot-31.png"
      ],
      "about": "This website was my first project worked on with 3 other amazing engineers! It's a fictional coffee shop where founders can come chat and order coffee!",
      "github_link": "https://github.com/mplisco/Coffee_Shop",
      "demo": "https://www.loom.com/share/0a1db737f0ab45a481e5da3d96229485",
      "tech_used": "HTML/CSS and JavaScript"
    },
    {
      "name": "Taskhive",
      "images": [
        "https://i.postimg.cc/sX9TXWSs/Screenshot-53.png",
        "https://i.postimg.cc/FzHVHBNV/Screenshot-54.png",
        "https://i.postimg.cc/3Nk0653V/Screenshot-56.png",
        "https://i.postimg.cc/T2Bc6QBg/Screenshot-57.png",
        "https://i.postimg.cc/05KpcDrQ/Screenshot-58.png"
    ],
      "about": "The application allows users to create tasks, assign tasks to projects, set deadlines, prioritize tasks, and track their progress.",
      "github_link": "https://github.com/Limeload/TaskHive",
      "demo": "",
      "tech_used": "Frontend: JavaScript, React, Bootstrap, vanilla CSS & Backend: Ruby, Rails, PostgreSQL, Bcrypt",
      "id": 7
    },
    {
      "name": "My Personal Site",
      "images": [
      "https://i.postimg.cc/85v9GCdf/Screenshot-28.png",
      "https://i.postimg.cc/8C3ywgwm/Screenshot-32.png",
      "https://i.postimg.cc/13VVwxnQ/Screenshot-33.png"
    ],
      "about": "Used to display my projects, contact info, and to tell people a little about myself!",
      "github_link": "https://github.com/Tatibow/my-personal-website",
      "demo": "",
      "tech_used": "Frontend: JavaScript, React, Material-UI & Backend: json-server for handling data",
      "id": 8
    }
  ]
  // setProjects(projectData)

console.log("line 117 | projectData: ", projectData)
  // ADDS NEW PROJECT (FORM CB FUNCTION)
    // const addNewProject = (newProject) => {
    //   const newData = [...projects, newProject]
    //   setProjects(newData)
    // }


    function getCurrentPage() {
      switch (page) {
        case "/":
          return <CenterCard/>
          case "/AboutMe":
            return <AboutMe/>
         case "/Portfolio":
        return <Portfolio projects={projectData}/>
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
