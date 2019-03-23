import React from "react"
import Header from "../components/header"
import Skills from "../components/skill"
import { graphql } from "gatsby"

export default ({ data }) => {  
 const about=data.ru.edges;
  
  return (
  <div>
   <Header></Header>
   {about.map((p, i) => (
          
          <h3>{p.node.name}</h3>
        ))}
    <Skills></Skills>
  </div>        
      
   
    
)
}

export const query = graphql` 
query{
  ru: allContentfulAbout(filter: { node_locale: { eq: "ru" } }) {
    edges{
      node{
        name
      }
    }
  }
  
}

  

  `