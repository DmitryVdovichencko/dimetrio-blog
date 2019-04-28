import React from "react"
import Post from "../components/post"
import Header from "../sections/header"
import { graphql } from "gatsby"
import { dateFormat } from "../sections/posts"
export default ({ data }) => {  
  const post = data.contentfulPost, img = data.contentfulPost.image.file.url, content= post.article.childMarkdownRemark.html;
  
  return (
  <div>
     <Header></Header>
      <Post
      img={img}
      date={dateFormat(post.publishedDate)}
      caption={post.caption}
      html={{__html: content }}
      />
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

