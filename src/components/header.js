import React from "react";
import { Link } from "gatsby"
import styles from "./header.module.scss"

function handleClick(event) {


	// menuElement.onclick = function(event){
		event.currentTarget.classList.toggle(styles.nav__menu_toggle_close);
  
	// }
}

export default () => (
	<div className={styles.header}>
		
    
   
		<nav className={styles.nav}>
		<Link className={styles.nav__header} to="/">
			<h1>Dmitry Vdovichenko</h1>
		</Link>
		<div className={styles.nav__menu}>
		 
			<Link className={styles.nav__links} to="/articles/">
				articles
			</Link>
			<Link className={styles.nav__links} to="/">
				projects
			</Link>
			<Link className={styles.nav__links} to="/about/">
				about
			</Link>
			</div>
			<div className={styles.nav__menu_toggle} onClick={handleClick}>
				<div className={styles.nav__bar}></div>
       			<div className={styles.nav__bar}></div>
       			<div className={styles.nav__bar}></div>
			</div>
		
	 
		</nav>

    	
  </div>
)