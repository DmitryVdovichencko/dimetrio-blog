import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from "../sections/section.module.scss"
import Content from '../components/Content';
import Layout from "../components/layout"

const dateFormat=(dateStr)=>{
  const userDate= new Date(Date.parse(dateStr)),
  options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC'
   };
   return userDate.toLocaleString("en-US", options)

}



  export default ({ data, location }) => {  
 const articles=data.contentfulAbout.posts;

 
  
  return (
  <div>
   <Layout path = {location.pathname}>
   {
    articles.map((article,i) =>(
      
      <Content
        key={i}
        type="article"
        caption={article.caption}
        descr={article.article.childMarkdownRemark.excerpt}
        link = {article.fields.slug}
        img={article.prevImage.file.url}
        imgTitle = {article.prevImage.title}
        date = {dateFormat(article.publishedDate)}
      >
      </Content>

 
      
      )
    )
  }
   
  </Layout>
    
  </div>        
      
   
    
)
}

export const query = graphql` 
query{

     contentfulAbout{
          posts{
          caption,
          publishedDate,
          prevImage{
            title
            file{
              url
            }
          },
          fields{
            slug
          }
          article{
            childMarkdownRemark{
              excerpt
            }
          }
        }
          
        
        }
}
  

  `