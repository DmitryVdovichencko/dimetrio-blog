// import React from 'react';
// import { StaticQuery, graphql,Link } from 'gatsby';


// const Skill= ({
//     name,
//     img,
//     learning,
//     projects
    
  
//   }) => (
    
//     <div className="skill">
//         <div class="skill__header">
//             <img className="skill__img">{img.file.url}</img>
//             <h2 className="skill__name">{name}</h2>
//         </div>
//         <section className="skill__description">
//             <p className="skill__learning">{learning}</p>
//             <p className="skill__projects">{projects}</p>
//         </section>
     
//     </div>
    
//   );
//   const Skills = () => (
      
//     <StaticQuery
//     query={graphql`
//       query SkillsQuery {
        
//         contentfulAbout{
//           posts{
//           caption,
//           publishedDate,
//           image{
//             title
//             file{
//               url
//             }
//           },
//           fields{
//             slug
//           }
//           article{
//             childMarkdownRemark{
//               excerpt
//             }
//           }
//         }
          
        
//         }
            
//       }
//     `}
//     render={({ contentfulAbout }) => (
//       <section className="skills">
//         {contentfulAbout.skills.map((p, i) => (
//            <Skill {...p} />
          
//         ))}
    
//       </section>
//     )}
//     />
//   );
  
//   export default Skill;