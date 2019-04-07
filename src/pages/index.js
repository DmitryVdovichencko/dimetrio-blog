import React from "react"
import Background from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import Projects from "../sections/projects"
import Posts from "../sections/posts"
import HeroImage from "../components/hero_image";
// import laptop from "../assets/img/laptop.svg" 


export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Background></Background>
    <Layout>
    <Header>
    
   
     
  

      </Header>
      <HeroImage></HeroImage>

      <Projects></Projects>
  
      <Posts></Posts>
      
    </Layout>
  </div>

}


