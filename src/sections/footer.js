import React from "react"
import { Icon, InlineIcon } from '@iconify/react';
import styles from './section.module.scss';

import gatsbyIcon from '@iconify/react/logos/gatsby';
import netlifyIcon from '@iconify/react/logos/netlify';
import growingHeart from '@iconify/react/emojione/growing-heart';
import contentfulIcon from '@iconify/react/logos/contentful';
export default () => {
   
    return(
        
        <footer className={styles.footer}>
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
