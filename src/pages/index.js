import React from "react"
import Background from "../components/background"
import Overlap from "../components/overlap"
import Layout from "../components/layout"
import Header from "../sections/header"
import Projects from "../sections/projects"
import Posts from "../sections/posts"
import HeroImage from "../components/HeroImage";
import Menu from "../components/Menu"
import Footer from "../sections/footer"

// import laptop from "../assets/img/laptop.svg" 


export default ()=> {
  // Import result is the URL of your image
  return <div>
  
    <Background></Background> 
    <Layout>
    

      <HeroImage></HeroImage>

      <Projects></Projects>
  
      <Posts></Posts>
      
      
    </Layout>
  
  </div>

}


