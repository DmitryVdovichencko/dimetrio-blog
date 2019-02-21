import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({data}) => {
    const post = data.markdownRemark
  return (
    <Layout>
    <Header></Header>
    <div className="articles">
        <h1>{post.frontmatter.title}</h1>        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
     </div>
    
    </Layout>
  )
}

export const query = graphql`  
    query($slug: String!) {    
        markdownRemark(
            fields: { slug: { eq: $slug } }) { 
                 html      
                 frontmatter {        
                     title      
                    }    
                }  
            }
    `