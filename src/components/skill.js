import React from 'react';
import { StaticQuery, graphql} from 'gatsby';


const Skill= ({
    name,
    img,
    description,
    projects
  
    
  
  }) => (
    
    <div className="skill">
        <div className="skill__header">
          
            <h2 className="skill__name">{name}</h2>
            <img src={img.file.url}></img>
        </div>
        <section className="skill__description">
     
            <p className="skill__learning" dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html }}></p>
            <p className="skill__projects">
            
               
                {projects.map((p, i) => (
           <div className="projects">
            <h3>{p.name}</h3>
              <a href={p.projectUrl}>{p.projectUrl}</a>
           </div>
          
        )
        )}
                
                
            
            </p>
        </section>
     
    </div>
    
  );
  const Skills = () => 
    
    
    
    
    (    
    <StaticQuery
    const lang="ru"
    query={graphql`
      query SkillsQuery{

       allContentfulAbout(filter: { node_locale: { eq: "ru" } }) {
          edges{
            node{
         skills{
              name
                img{
                title
                file{
                  url
                }
             
              }
                  description{
                childMarkdownRemark{
                  html
                }
              }
              projects{
                name
                projectUrl
                repositoryUrl
              }
          
            
            }
          }
        }
      }
    }
        
      
        
    `}
    render={data => (
      <section className="skills">
        {data.allContentfulAbout.edges[0].node.skills.map((p, i) => (
           <Skill {...p} />
          
        )
        )}
    
      </section>
    )}
    />
  ) ;
  
  export default Skills;