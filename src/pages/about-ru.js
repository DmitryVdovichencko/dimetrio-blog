import React from "react"

import Skill from "../components/skill"
import Project from "../components/project"
import CV from "../components/cv"
import { graphql} from "gatsby"

import Layout from "../components/layout"

export default ({ data, location }) => {  
 const about=data.allContentfulAbout.edges[0];
 
  
  return (
  <div>
   <Layout path = {location.pathname}>
   <CV 
        name={about.node.name} 
        skills=  {about.node.skills.map((p, i) => (
           <Skill key = {i} {...p} />
          
        )
        )}
        projects =  {about.node.projects.map((p, i) => (
          <Project key={i} {...p} cv={true} />
         
       ))}
       otherlang="en">
  </CV>
  </Layout>
    
  </div>        
      
   
    
)
}

export const query = graphql` 
query{

  allContentfulAbout(filter: { node_locale: { eq: "ru"} }) {
     edges{
       node{
         name,
         projects{
          name
          description{
            childMarkdownRemark{
              html
            }
          }
          repositoryUrl
          projectUrl
        },
    skills{
         name
           img{
           title
           file{
             url
           }
        
         }
             description{
           childMarkdownRemark{
             html
           }
         }
       
     
       
       }
     }
   }
 }
}

  

  `