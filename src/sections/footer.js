import React from "react"
import { InlineIcon } from '@iconify/react';
import styles from './section.module.scss';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import netlifyIcon from '@iconify/icons-logos/netlify';
import growingHeart from '@iconify/icons-emojione/growing-heart';
import contentfulIcon from '@iconify/icons-logos/contentful';
import Contacts from '../components/Contacts';
import { StaticQuery, graphql } from 'gatsby';


const Footer = (props) => (
    
    <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          socialLinks{
            name
            url
          }
        }
      }
    `}
    render={(props) => (
     
<footer className={styles.footer}>


            <div className={styles.footer__content}>
            <p> Created with 
            <InlineIcon icon={contentfulIcon} className={styles.footer__icon} />
            Contentful
            <InlineIcon icon={growingHeart} className={styles.footer__icon} />
            and
            <InlineIcon icon={gatsbyIcon} className={styles.footer__icon} />
            Gatsby,
            hosted on
            <InlineIcon icon={netlifyIcon} className={styles.footer__icon}/>
            Netlify
            </p>
          
        
           
     
  <Contacts contacts = {props.contentfulAbout.socialLinks} size='24px' color='#8deee7' />
  </div>   
        </footer>

    )}
    />
  );
  
  export default Footer;