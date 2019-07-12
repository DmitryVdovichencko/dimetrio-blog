import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from "./section.module.scss"
import PreviewPost from '../components/previewPost';
import Bg from "../components/bg"
import bgStyles from "../components/background.module.scss"

import {project__link} from '../components/project.module.scss'

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
const Post= ({
    caption,
    publishedDate,
    prevImage,
    fields,
    article
  
  }) => (
   

    <a href={fields.slug}>
 
    <PreviewPost
    name={caption}
    img_src={prevImage.file.url}
    img_title={prevImage.title}
    publishedDate={`Published at ${dateFormat(publishedDate)}`}
    content={{__html: article.childMarkdownRemark.excerpt }}
    
    >

    </PreviewPost>
    </a>
   
  );
  const Posts = () => (
      
    <StaticQuery
    query={graphql`
      query PostsQuery {
        
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
    `}
    render={({ contentfulAbout }) => (
      
      <section className={styles.previews}>
        {contentfulAbout.posts.map((p, i) => (
           <Post key={i} {...p} />
          
        ))}

       <Bg 
      points="0 0.8, 0 0, 1 0.2, 1 1"
      id="polygon-post"
      className={bgStyles.posts__section}
      ></Bg>
      <div className={styles.section__link}>
        <a className={project__link} href="/articles/"> More articles... </a>
        
      </div>
      </section>
      
     
    )}
    />
  );
  
  export default Posts;
  export {dateFormat};