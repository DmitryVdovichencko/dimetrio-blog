import React from "react"
import { Icon, InlineIcon } from '@iconify/react';
import styles from './section.module.scss';
import bgStyles from "../components/background.module.scss"
import Bg from "../components/bg"
import gatsbyIcon from '@iconify/react/logos/gatsby';
import netlifyIcon from '@iconify/react/logos/netlify';
import growingHeart from '@iconify/react/emojione/growing-heart';
import contentfulIcon from '@iconify/react/logos/contentful';
export default () => {
   
    return(
        
        <footer className={styles.footer}>
              <Bg 
      points="0 1, 0 0.5, 1 0, 1 1"
      id="polygon-footer"
      className={bgStyles.footer__section}
      ></Bg>
            <p> Created with 
            <Icon icon={contentfulIcon} className={styles.footer__icon} />
            Contentful
            <Icon icon={growingHeart} className={styles.footer__icon} />
            and
            <Icon icon={gatsbyIcon} className={styles.footer__icon} />
            Gatsby,
            hosted on
            <Icon icon={netlifyIcon} className={styles.footer__icon}/>
            Netlify
            </p>
   
        </footer>
        
        
    )

    }
