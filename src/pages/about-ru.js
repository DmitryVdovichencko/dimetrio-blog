import React from "react"
import Header from "../components/header"
import Skills from "../components/skill"
import { graphql, Link} from "gatsby"

const Skill= ({
  name,
  img,
  description,
  projects

  

}) => (
  
  <div className="skill">
      <div className="skill__header">
        
          <h2 className="skill__name">{name}</h2>
          <img src={img.file.url}></img>
      </div>
      <section className="skill__description">
   
          <p className="skill__learning" dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html }}></p>
          <p className="skill__projects">
          
             
              {projects.map((p, i) => (
         <div className="projects">
          <h3>{p.name}</h3>
            <a href={p.projectUrl}>{p.projectUrl}</a>
         </div>
        
      )
      )}
              
              
          
          </p>
      </section>
   
  </div>
  
);

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