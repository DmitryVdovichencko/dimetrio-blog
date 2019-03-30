import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from "../components/project"

const Projects = () => (
      
    <StaticQuery
    query={graphql`
      query ProjectsQuery {
        contentfulAbout {
          projects {
            name
            description {
              childMarkdownRemark{
                html
              }
            }
            projectUrl
            repositoryUrl
            type
            publishedDate(formatString: "YYYY")
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
           <Project key={p.id} {...p} preview={true} />
          
        ))}
    
      </section>
    )}
    />
  );
  
  export default Projects;