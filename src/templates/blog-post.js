import React from "react"
import Post from "../components/post"
import { graphql } from "gatsby"
import { dateFormat } from "../sections/posts"
import { location } from '@reach/router'
import Layout from "../components/layout"
export default ({ data,location }) => {  
  const post = data.contentfulPost, img = data.contentfulPost.image.file.url, content= post.article.childMarkdownRemark.html;
  
  return (
  <div>
     <Layout path = {location.pathname}>
      <Post
      img={img}
      date={dateFormat(post.publishedDate)}
      caption={post.caption}
      html={{__html: content }}
      />
      </Layout>
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
      publishedDate      
      article{
        childMarkdownRemark{
          html
        }
      }   
    }  
  }
  `

