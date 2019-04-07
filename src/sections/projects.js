import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from "../components/project"
import styles from "./section.module.scss"
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
      <section className={styles.previews}>
        {contentfulAbout.projects.map((p, i) => (
           <Project key={i} {...p} preview={true} />
          
        ))}
    
      </section>
    )}
    />
  );
  
  export default Projects;