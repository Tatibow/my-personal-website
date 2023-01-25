import React from "react"

function NavBar({onChangePage}) {

    function handleLinkClick(e) {
        e.preventDefault();
        onChangePage(e.target.pathname)
    }
    return (
        <nav>
            <a onClick={handleLinkClick} href="/">Main</a>
            <a onClick={handleLinkClick} href="/AboutMe">About Me</a>
            <a onClick={handleLinkClick} href="/Portfolio">Project Portfolio</a>
            <a onClick={handleLinkClick} href="/NewProjectForm">Project Form</a>
        </nav>
    )
}



export default NavBar
