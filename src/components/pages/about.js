import Navbar from "../NavBar/navbar";
import React from "react";
import OurVision from "../OurVision/vision.js";
import OurValues from "../OurValues/values";
import OurTeam from "../OurTeam/team";

const AboutUs = () => {
    return (
    <div>
        <Navbar/>                 
        <OurVision/>  
        <OurValues/>
        <OurTeam/>
    </div>
     

    );
  };

export default AboutUs;