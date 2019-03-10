import React from 'react';
import { StaticQuery, graphql,Link } from 'gatsby';

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
    <div className="post preview-box">
        <h1>{caption}</h1>
        <img className="post__img" src={image.file.url} alt={image.title} />
        <p className="post__date">Published at {dateFormat(publishedDate)}</p>
        <article className="post__content">{article.childMarkdownRemark.excerpt}</article>
    </div>
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