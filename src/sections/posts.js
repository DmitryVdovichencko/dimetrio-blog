import React from 'react';
import { StaticQuery, graphql,Link } from 'gatsby';

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
    image,
    fields,
    article
  
  }) => (
   

    <Link to={fields.slug}>
 
    <PreviewPost
    name={caption}
    img_src={image.file.url}
    img_title={image.title}
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
          image{
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
      <section className="posts">
        {contentfulAbout.posts.map((p, i) => (
           <Post {...p} />
          
        ))}
    
      </section>
    )}
    />
  );
  
  export default Posts;
  export {dateFormat};