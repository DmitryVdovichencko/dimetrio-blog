import React from 'react';
import { StaticQuery, graphql,Link } from 'gatsby';
import styles from "./section.module.scss"
import PreviewPost from '../components/previewPost';

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
   

    <Link to={fields.slug}>
 
    <PreviewPost
    name={caption}
    img_src={prevImage.file.url}
    img_title={prevImage.title}
    publishedDate={`Published at ${dateFormat(publishedDate)}`}
    content={{__html: article.childMarkdownRemark.excerpt }}
    
    >

    </PreviewPost>
    </Link>
   
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
           <Post {...p} />
          
        ))}
    
      </section>
    )}
    />
  );
  
  export default Posts;
  export {dateFormat};