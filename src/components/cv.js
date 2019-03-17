import React from "react"
import { StaticQuery, graphql,Link } from 'gatsby';

export default ({ data }) => {  
    const CV = ({
        name,
        about,
        skills,
        contacts
      
      }) => (
        
        <div className="cv">
            <h1 className="cv__name">{name}</h1>
            <p className="cv__about">{about}</p>
            <div className="cv__skill">{skills}</div>
            <p className="cv__contacts">{contacts}</p>
        </div>
       
    );
    
    return (
    <div>
       
      {/* <CV
        img={img}
        date={dateFormat(post.publishedDate)}
        caption={post.caption}
        html={{__html: content }}
        /> */}
    </div>        
        
     
      
  )
  }


// export const query = graphql`  
//   query($slug: String!) {    
//     contentfulPost(fields: { slug: { eq: $slug } }) {
//       caption
//       image{
//         file{
//           url
//         }
//       }
//       publishedDate      
//       article{
//         childMarkdownRemark{
//           html
//         }
//       }   
//     }  
//   }
//   `