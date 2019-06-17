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
<div className={styles.about__content}>
  <h1>About me</h1>
  <div dangerouslySetInnerHTML={{__html:contentfulAbout.aboutMe.childMarkdownRemark.html}} className={styles.about__text}></div>
     
  <Contacts contacts = {contentfulAbout.socialLinks} size='32px' color='#5951b0' />
</div>
      </section>
    )}
    />
  );
  
  export default About;