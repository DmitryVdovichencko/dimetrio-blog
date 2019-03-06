import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Projects from "../sections/projects"
import Hero_image from "../components/hero_image";
// import laptop from "../assets/img/laptop.svg" 


export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Layout>
    <Header>
    
   
     
  

      </Header>
      <Hero_image></Hero_image>
      <div className="projects-section">
      <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-project-trapezoid" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0.2, 1 0.8" />
					</clipPath>
				</defs>
		    </svg></div>
      <Projects></Projects>
    </Layout>
  </div>

}


