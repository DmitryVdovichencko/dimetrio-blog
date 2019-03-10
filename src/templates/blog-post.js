import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"

export default ({ data }) => {  
  const post = data.contentfulPost, img = data.contentfulPost.image.file.url
  return (
  <div>
     <Header></Header>
    <div>        
      <h1>{post.caption}</h1>
      <img src= {img} ></img>        
      <div dangerouslySetInnerHTML={{ __html: post.article.childMarkdownRemark.html }} />      
    </div>    
    </div>
)
}

export const query = graphql`  
  query($slug: String!) {    
    contentfulPost(fields: { slug: { eq: $slug } }) {
      caption
      image{
        file{
          url
        }
      }      
      article{
        childMarkdownRemark{
          html
        }
      }   
    }  
  }
  `

