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
            
                <h3>{projects[0].name}</h3>
                <a href={projects[0].projectUrl}>{projects[0].projectUrl}</a>
                
            
            </p>
        </section>
     
    </div>
    
  );
  const Skills = () => (
      
    <StaticQuery
    query={graphql`
      query SkillsQuery {

        contentfulAbout{
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
      
        
    `}
    render={({ contentfulAbout }) => (
      <section className="skills">
        {contentfulAbout.skills.map((p, i) => (
           <Skill {...p} />
          
        )
        )}
    
      </section>
    )}
    />
  );
  
  export default Skills;