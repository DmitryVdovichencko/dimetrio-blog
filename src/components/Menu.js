import React from 'react';
import { Link } from "gatsby"
import styles from './menu.module.scss';

function handleClick(event) {


    
        event.currentTarget.classList.toggle(styles.nav__menu_toggle_close);
        event.currentTarget.parentElement.classList.toggle(styles.nav__menu_mobile);

        document.body.style.maxHeight = (document.body.style.maxHeight!=="100vh") ? "100vh" : "none";
        document.body.style.overflow = (event.currentTarget.parentElement.classList.contains(styles.nav__menu_mobile)) ? "hidden": "visible";
        
        
    
}
const Menu = ({header, links})=> {
    
    return (
        
        <div className={styles.header}>
        
    
   
            <nav className={styles.nav}>

                <Link  className={styles.nav__header} to={header.headerLink}>
                    <h1>{header.headerName}</h1>
                </Link>
           <div className={styles.nav__menu}>
            {
            links.map((link) => {
              return <Link className={styles.nav__links} to={link.refLink} > {link.nameLink} </Link>
              })
            }
         
             </div>
            
            </nav>
            <div className={styles.nav__menu_toggle} onClick={handleClick}>
                <div className={styles.nav__bar}></div>
                <div className={styles.nav__bar}></div>
                <div className={styles.nav__bar}></div>
            </div>
        </div>
    );
}
export default Menu;

