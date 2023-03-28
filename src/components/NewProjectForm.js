// import React, {useState} from "react"


// function NewProjectForm({url, addNewProject}) {
//     const initialData = {
//         name: "",
//         image: "",
//         about: "",
//         github_link: "",
//         project_link: "",
//         tech_used: ""
//     }

//     const [formData, setFormData] = useState(initialData)

//     function handleFormData(e) {
//         const {name, value} = e.target;
//         setFormData({...formData, [name]: value});
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const newProject = {
//             name: formData.name,
//             image: formData.image,
//             about: formData.about,
//             github_link:formData.github_link,
//             project_link: formData.project_link,
//             tech_used: formData.tech_used
//         }

//         // POST REQUEST
//         fetch(url, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newProject)
//         })
//        .then(res => res.json())
//        .then(addNewProject)

//        // FORM RESET
//         setFormData(initialData)
//     }

//     return (
//         <div className="new-project-form">
//         <h1 className="spaceDefault">New Project Form</h1>
//         <h4 className="spaceDefault">I created this form to make it easier for me to add new projects to my site!</h4>
//         <form onSubmit={(e) => {
//             console.log("Submitting Form...");
//             handleSubmit(e);
//         }}>
//             <input className="spaceDefault" type="text" placeholder="enter name..." name="name" value={formData.name} onChange={handleFormData}/> <br/>
//             <input className="spaceDefault" type="text" placeholder="enter image url..." name="image" value={formData.image} onChange={handleFormData}/> <br/>
//             <textarea className="spaceDefault" type="text" placeholder="enter project description..." name="about" value={formData.about} onChange={handleFormData}/> <br/>
//             <input className="spaceDefault" type="text" placeholder="enter github url..." name="github_link" value={formData.github_link} onChange={handleFormData}/> <br/>
//             <input className="spaceDefault" type="text" placeholder="enter project url..." name="project_link" value={formData.project_link} onChange={handleFormData}/> <br/>
//             <input className="spaceDefault" type="text" placeholder="enter tech used..." name="tech_used" value={formData.tech_used} onChange={handleFormData}/> <br/>
//             <button id="submit-btn" className="spaceDefault" type="submit"><em>Add New Project</em></button>
//         </form>
//         </div>
//     )
// }



// export default NewProjectForm
