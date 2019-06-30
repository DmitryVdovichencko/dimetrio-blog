import React from "react"
import Layout from "../components/layout"
import Content from '../components/Content';
import Project from "../components/project"

import { graphql } from "gatsby"
const dateFormat=(dateStr)=>{
  const userDate= new Date(Date.parse(dateStr)),
  options = {
    year: 'numeric',
    month: 'long'
  
   };
   return userDate.toLocaleString("en-US", options)

}

export default ({ data, location }) => {  
 const projects = data.allContentfulProject.edges;
 
  
  return (
  <div>
   <Layout path = {location.pathname}>
{projects.map((p, i) => (
       


         
               <Content
        key={i}
        type="project"
        caption={p.node.name}
        descr={p.node.cvDescription}
        link = {p.node.projectUrl}
        img={p.node.logo.file.url}
        imgTitle = {p.node.logo.fileName}
        date = {dateFormat(p.node.publishedDate)}
      >
      </Content>

       ))}

  </Layout>
    
  </div>        
      
   
    
)
}

export const query = graphql` 
query{
  allContentfulProject(filter: { node_locale: { eq: "en-US"} }){
    edges{
      node{
        name
        publishedDate
        projectUrl
        repositoryUrl
        logo{
          file{
            url
            fileName
          }
        }
        cvDescription{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  }
}

  

  `