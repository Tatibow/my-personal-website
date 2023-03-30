import React from "react"
import Content from "./Content"
import ContactInfo from "./ContactInfo"




function CenterCard({url}) {

  const handleFaceClick = () => {
      alert("no touching!!")

      setTimeout(() => {
        alert("just kidding!")
      }, 1000)
  }

    return (
    <div className="center">
        <div className="profpic">
          <img onClick={handleFaceClick} src="https://i.postimg.cc/76tsQLV5/IMG-3399.jpg" alt="my face"/>
        </div>
        <Content/>
        <ContactInfo/>
      </div>
    )
}


export default CenterCard
