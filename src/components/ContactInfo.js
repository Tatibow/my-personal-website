import React from "react"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import LaptopIcon from "@material-ui/icons/Laptop"

function ContactInfo() {
    return (
    <div className="social">
        <h3>Contact Info & Social</h3>
        <address><a id="email" href="mailto:bowmantatiana2@gmail.com"><EmailIcon/></a></address> 
        <a id="github" href="https://github.com/Tatibow"><GitHubIcon/></a>
        <a id="linkedin" href="https://www.linkedin.com/in/tatiana-b-3b3b5116a/"><LinkedInIcon/></a>
        <a id="blog" href="https://dev.to/tatianabowman"><LaptopIcon/></a>
    </div>
    )
}

export default ContactInfo
