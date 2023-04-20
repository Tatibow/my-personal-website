import React from "react"


function AboutMe() {




    return (
        <>
            <div id="spaceDefault" className="about-me">
                <h1 className="about-me-headers">About Me</h1>
                <p>
                    <strong>
                        <em>
                            I am a 21 year old full-stack software developer from Pennsylvania experienced in JavaScript, HTML, CSS, React, Ruby, and Rails. I have a background in customer service and management, which helped develop my leadership, teamwork, communication, problem-solving, and time-management skills. Throughout my time in flatirons program, I not only developed technical skills but also a sense of drive, and the ability to learn challenging concepts quickly and efficiently. I'm excited to continually grow and hone these skills while also developing new ones throughout my engineering journey.
                        </em>
                    </strong>
                </p>
            </div>

            <div id="spaceDefault" className="passionate-about">
                <h1 className="about-me-headers">Skills & Hobbies</h1>
                <p>
                    <strong>
                        <em>
                            <h3 className="spaceDefault">skills...</h3>
                            <span id="spaceDefault" className="icons">
                                <img src="https://i.postimg.cc/ydQ3y6zT/icons8-javascript-50.png" alt="" title="JavaScript" />
                                <img  src="https://i.postimg.cc/TPjPCdnD/icons8-react-80.png" alt="" title="React"/>
                                <img src="https://i.postimg.cc/05X7pnkq/icons8-html-50.png" alt="" title="HTML"/>
                                <img  src="https://i.postimg.cc/PfSQShM9/icons8-css-50.png" alt="" title="CSS"/>
                                <img  src="https://i.postimg.cc/9Xkq4fbm/icons8-ruby-programming-language-48.png" title="Ruby" alt="" />
                                <img  src="https://i.postimg.cc/J76gVBWQ/icons8-sql-50.png" alt="" title="SQL (Structured Query Language)"/>

                                {/* <img src="rails link" alt="" title="Rails"/> */}
                            </span>
                            <h3  className="spaceDefault">hobbies...</h3>
                            I love playing guitar, music has always been my first love, i'm an avid reader of all genres (although romance is my guilty pleasure).
                            A Total movie lover and movie theater rat it's basically my second home, I try to post on letterboxd whenever I go.
                        </em>
                    </strong>
                </p>
            </div>

            <div id="spaceDefault" className="learning">
                <h1 className="about-me-headers">Learning</h1>
                <p>
                    <strong>
                        <em>
                            <h3 className="spaceDefault">I have a passion for learning which is why I think SWE is perfect for me,
                                there is always something new to learn in the tech world whether its a language, framework,
                                field, and etc.
                            </h3>
                            <h3 className="spaceDefault">want to learn...</h3>
                            <span id="spaceDefault" className="icons">
                                {/* <img src="https://i.postimg.cc/VNXFgC7W/icons8-python-50.png" title="Python" alt="" /> */}
                                <img src="https://i.postimg.cc/156cs6Sh/icons8-php-50.png" title="PHP" alt="" />
                                <img src="https://i.postimg.cc/kgvQtmDT/icons8-java-50.png" title="Java" alt="" />
                                {/* <img src="django link" alt="" title="django"/> */}
                                {/* <img src="spring framework" alt="" title=""spring framework""/> */}
                                <img src="https://i.postimg.cc/BbHMKtXj/icons8-amazon-web-services-32.png" alt="" title="AWS (Amazon Web Services)"/>
                                <img src="https://i.postimg.cc/XqFDkrBM/icons8-project-management-50.png" alt="" title="Project Management"/>
                                <img src="https://i.postimg.cc/kXqkvysf/icons8-secure-cloud-50.png" alt="" title="Cloud Engineering"/>
                                <img src="https://i.postimg.cc/yYrzPbds/icons8-blockchain-technology-30.png" alt="" title="Blockchain"/>
                                {/* <img src="https://i.postimg.cc/J76gVBWQ/icons8-sql-50.png" alt="" title="SQL (Structured Query Language)"/> */}

                            </span>

                            <h3 className="spaceDefault" id="tizzop">currently learning...</h3>
                            <img src="https://i.postimg.cc/VNXFgC7W/icons8-python-50.png" title="Python" alt="" />
                            {/* <span id="spaceDefault"></span> */}
                        </em>
                    </strong>
                </p>
            </div>
        </>
    )
}


export default AboutMe
