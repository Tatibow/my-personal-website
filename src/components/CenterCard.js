import React from "react"
import Content from "./Content"
import ContactInfo from "./ContactInfo"






function CenterCard({url}) {

    return (

    <div className="center">
        <div className="profpic">
          <img  src="https://i.postimg.cc/76tsQLV5/IMG-3399.jpg" alt="my face"/>
        </div>
        <Content/>
        <ContactInfo/>
      </div>
      
    )
}


export default CenterCard
