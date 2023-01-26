import React from "react"


function AboutMe() {
    return (
        <>
            <div id="spaceDefault" className="about-me">
                <h1 className="about-me-headers">About Me</h1>
                <p>
                    <strong>
                        <em>
                            I am a 21 year old full-stack software developer from Pennsylvania experienced in JavaScript, HTML, CSS, react, ruby, and rails. I have a background in customer service and management, which helped develop my leadership, teamwork, communication, problem-solving, and time-management skills. Throughout my time in flatirons program, I not only developed technical skills but also a sense of drive, and the ability to learn challenging concepts quickly and efficiently. I'm excited to continually grow and hone these skills while also developing new ones throughout my engineering journey.
                        </em>
                    </strong>
                </p>
            </div>

            <div id="spaceDefault" className="passionate-about">
                <h1 className="about-me-headers">Passions & Hobbies</h1>
                <p>
                    <strong>
                        <em>
                            <h3 className="spaceDefault">passions...</h3>
                            <span id="spaceDefault" className="icons">
                                <img src="https://i.postimg.cc/ydQ3y6zT/icons8-javascript-50.png" alt="" />
                                <img src="https://i.postimg.cc/TPjPCdnD/icons8-react-80.png" alt="" />
                                <img src="https://i.postimg.cc/05X7pnkq/icons8-html-50.png" alt="" />
                                <img src="https://i.postimg.cc/PfSQShM9/icons8-css-50.png" alt="" />
                                <img src="https://i.postimg.cc/9Xkq4fbm/icons8-ruby-programming-language-48.png" alt="" />
                            </span>
                            <h3 className="spaceDefault">hobbies...</h3>
                            I love playing guitar, music has always been my first love, i'm an avid reader of all genres (although romance is my guilty pleasure).
                            A Total movie lover and movie theater rat It's basically my second home, I try to post on letterboxd whenever I go.
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
                                <img src="https://i.postimg.cc/VNXFgC7W/icons8-python-50.png" alt="" />
                                <img src="https://i.postimg.cc/156cs6Sh/icons8-php-50.png" alt="" />
                                <img src="https://i.postimg.cc/kgvQtmDT/icons8-java-50.png" alt="" />
                            </span>

                            <h3 className="spaceDefault">currently learning...</h3>
                            {/* <span id="spaceDefault"></span> */}
                        </em>
                    </strong>
                </p>
            </div>
        </>
    )
}


export default AboutMe
