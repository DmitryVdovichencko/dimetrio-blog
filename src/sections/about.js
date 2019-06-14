import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styles from "./section.module.scss"

import Contacts from '../components/Contacts';




const About = () => (
      
    <StaticQuery
    query={graphql`
      query AboutQuery {
        contentfulAbout {
          roles
          aboutMe{
            childMarkdownRemark{
              html
            }
          }
          socialLinks{
            name
            url
          }
        }
      }
    `}
    render={({ contentfulAbout }) => (
      
      <section className={styles.about}>
      <div dangerouslySetInnerHTML={{__html:contentfulAbout.aboutMe.childMarkdownRemark.html}} className={styles.post__content}></div>
   
 <Contacts contacts = {contentfulAbout.socialLinks} />
      </section>
    )}
    />
  );
  
  export default About;