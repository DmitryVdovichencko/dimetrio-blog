import React from "react"
import Header from "../components/header"
import Skill from "../components/skill"
import Project from "../components/project"
import { graphql, Link} from "gatsby"



export default ({ data }) => {  
 const about=data.allContentfulAbout.edges[0];
 
  
  return (
  <div>
   <Header></Header>
   <Link to="/about/">en</Link>
    <p>{about.node.name}</p>
    <section className="skills">
        {about.node.skills.map((p, i) => (
           <Skill {...p} />
          
        )
        )}
    
      </section>
      <section className="projects">
        {about.node.projects.map((p, i) => (
           <Project key={p.id} {...p} cv={true} />
          
        ))}
    
      </section>
    
  </div>        
      
   
    
)
}

export const query = graphql` 
query{

  allContentfulAbout(filter: { node_locale: { eq: "ru"} }) {
     edges{
       node{
         name,
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
         projects{
           name
           projectUrl
           repositoryUrl
         }
     
       
       }
     }
   }
 }
}

  

  `