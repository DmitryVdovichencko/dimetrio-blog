import React from "react"
import Background from "../components/background"
import Layout from "../components/layout"
import Header from "../components/header"
import Projects from "../sections/projects"
import Posts from "../sections/posts"
import Hero_image from "../components/hero_image";
// import laptop from "../assets/img/laptop.svg" 


export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Background></Background>
    <Layout>
    <Header>
    
   
     
  

      </Header>
      <Hero_image></Hero_image>
      <div className="projects-section">
      <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-project" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0.2, 1 0.8" />
					</clipPath>
				</defs>
		    </svg></div>
      <Projects></Projects>
      <div className="posts-section">
      <svg className="clip-svg">
				<defs>
          <clipPath id="polygon-post" clipPathUnits="objectBoundingBox">
						<polygon points="0 0.8, 0 0, 1 0.2, 1 1" />
					</clipPath>
				</defs>
		    </svg></div>
      <Posts></Posts>
      
    </Layout>
  </div>

}


