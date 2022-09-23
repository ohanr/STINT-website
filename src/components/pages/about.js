import Navbar from "../NavBar/navbar";
import React from "react";
import OurVision from "../OurVision/vision.js";
import OurValues from "../OurValues/values";

const AboutUs = () => {
    return (
    <div>
        <Navbar/>                 
        <OurVision/>  
        <OurValues/>
    </div>
     

    );
  };

export default AboutUs;