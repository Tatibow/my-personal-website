import React, {useState} from "react"


function NewProjectForm({url, addNewProject}) {
    const initialData = {
        name: "",
        about: "",
        link: ""
    }

    const [formData, setFormData] = useState(initialData)

    function handleFormData(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProject = {
            name: formData.name,
            about: formData.about,
            link: formData.link
        }

        // POST REQUEST
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProject)
        })
       .then(res => res.json())
       .then(addNewProject)

       // FORM RESET
        setFormData(initialData)
    }

    return (
        <div className="new-project-form">
        <h1 className="spaceDefault">New Project Form</h1>
        <h3 className="spaceDefault">I created this form to make it easier for me to add new projects to my site!</h3>
        <form onSubmit={(e) => {
            console.log("Submitting Form...");
            handleSubmit(e);
        }}>
            <input className="spaceDefault" type="text" placeholder="Project Name" name="name" value={formData.name} onChange={handleFormData}/> <br/>
            <input className="spaceDefault" type="text" placeholder="About Project" name="about" value={formData.about} onChange={handleFormData}/> <br/>
            <input className="spaceDefault" type="text" placeholder="Project URL" name="link" value={formData.link} onChange={handleFormData}/> <br/>
            <button id="submit-btn" className="spaceDefault" type="submit"><em>Add New Project</em></button>
        </form>
        </div>
    )
}



export default NewProjectForm
