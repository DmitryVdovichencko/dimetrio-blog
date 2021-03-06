import React from "react"


import Layout from "../components/layout"

import Projects from "../sections/projects"
import Posts from "../sections/posts"
import HeroImage from "../components/HeroImage";
import About from "../sections/about"

// import laptop from "../assets/img/laptop.svg" 


export default ({location})=> {
  // Import result is the URL of your image
  return <div>
  
    
    <Layout path = {location.pathname}>
    

      <HeroImage></HeroImage>
      <About></About>
      <Projects></Projects>
  
      <Posts></Posts>
     
      
    </Layout>
  
  </div>

}


