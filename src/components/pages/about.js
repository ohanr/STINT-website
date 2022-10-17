import Navbar from "../NavBar/navbar.js"
import React from "react";
import OurVision from "../OurVision/vision.js";
import OurValues from "../OurValues/values";
import OurTeam from "../OurTeam/team";
import Footer from "../Footer/footer.js"
const AboutUs = () => {
    return (
    <div>
        <Navbar/>                
        <OurVision/>  
        <OurValues/>
        <OurTeam/>
        <Footer/>
    </div>
     

    );
  };

export default AboutUs;