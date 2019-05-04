import React from "react"
import { Icon, InlineIcon } from '@iconify/react';

import gatsbyIcon from '@iconify/react/logos/gatsby';
import netlifyIcon from '@iconify/react/logos/netlify';
import growingHeart from '@iconify/react/emojione/growing-heart';
import contentfulIcon from "../assets/img/contentful-light.svg" 
export default () => {
   
    return(
        
        <footer>
            <p> Created with 
            <object type="image/svg+xml" className="dev__img" data={contentfulIcon}>Your browser does not support SVGs</object>
            <Icon icon={growingHeart} />
            and
            <Icon icon={gatsbyIcon} />
            Gatsby,
            hosted on
            <Icon icon={netlifyIcon} />
            Netlify
            </p>
   
        </footer>
        
        
    )

    }
