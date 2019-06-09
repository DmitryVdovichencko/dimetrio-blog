import React from "react"
import { InlineIcon } from '@iconify/react';
import styles from './section.module.scss';
import bgStyles from "../components/background.module.scss"
import Bg from "../components/bg"
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import netlifyIcon from '@iconify/icons-logos/netlify';
import growingHeart from '@iconify/icons-emojione/growing-heart';
import contentfulIcon from '@iconify/icons-logos/contentful';
export default (props) => {
   
    return(
        
       <footer className={styles.footer}>
         { props.displayBg ? <Bg 
      points="0 1, 0 0.7, 1 0, 1 1"
      id="polygon-footer"
      className={bgStyles.footer__section}
      ></Bg>  : null }   
    
                

  
   
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
        </div>   
        </footer>
        
        
    )

    }
