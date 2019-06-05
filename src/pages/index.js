import React from "react"
import Background from "../components/background"

import Layout from "../components/layout"

import Projects from "../sections/projects"
import Posts from "../sections/posts"
import HeroImage from "../components/HeroImage";


// import laptop from "../assets/img/laptop.svg" 


export default ({location})=> {
  // Import result is the URL of your image
  return <div>
  
    <Background></Background> 
    <Layout path = {location.pathname}>
    

      <HeroImage></HeroImage>

      <Projects></Projects>
  
      <Posts></Posts>
     
      
    </Layout>
  
  </div>

}


