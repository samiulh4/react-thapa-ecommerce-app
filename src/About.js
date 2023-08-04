import React from "react";
import HeroSection from "./components/HeroSectio";

const About = ({ mydata }) =>{
    const data = {
        name : "Thapa Ecommerce"
    };
    return <HeroSection myData={data}/>
}

export default About;