import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from "../components/project"
import Bg from "../components/bg"
import bgStyles from "../components/background.module.scss"
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
           <Project key = {i} {...p} preview={true} />
          
        ))}
      <Bg 
      points="0 1, 0 0, 1 0.2, 1 0.8"
      id="polygon-project"
      className={bgStyles.projects__section}
      ></Bg>
      </section>
    )}
    />
  );
  
  export default Projects;