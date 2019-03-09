import React from 'react';
import { StaticQuery, graphql } from 'gatsby';


const Project = ({
    name,
    description,
    projectUrl,
    repositoryUrl,
    type,
    publishedDate,
    logo,
  }) => (
    <div className="project preview-box">
        <h1>{name}</h1>
        <img className="project__img preview-box__img" src={logo.image.src} alt={logo.title} />
        <p className="project__type">{type}</p>
        <p className="project__descr">{description}</p>
        <p className="project__date">{publishedDate}</p>
        <a className="project__url" href={projectUrl}> {name}</a>
        <a className="project__repo" href={repositoryUrl}>{name} github repository</a>


    </div>
  );
  const Projects = () => (
      
    <StaticQuery
    query={graphql`
      query ProjectsQuery {
        contentfulAbout {
          projects {
            id
            name
            description
            projectUrl
            repositoryUrl
            publishedDate(formatString: "YYYY")
            type
            logo {
              title
              image: resize(width: 200, quality: 100) {
                src
              }
            }
          }
        }
      }
    `}
    render={({ contentfulAbout }) => (
      <section className="projects">
        {contentfulAbout.projects.map((p, i) => (
           <Project key={p.id} {...p} />
          
        ))}
    
      </section>
    )}
    />
  );
  
  export default Projects;