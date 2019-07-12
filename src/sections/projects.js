import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Project from "../components/project"
import Bg from "../components/bg"
import bgStyles from "../components/background.module.scss"
import styles from "./section.module.scss"

import {project__link} from '../components/project.module.scss'
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
                 file{
            url
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
         <div className={styles.section__link}>
         <a className={project__link} href="/projects/"> More projects... </a>
        
      </div>
      </section>
    )}
    />
  );
  
  export default Projects;