import React from "react";
import { Link } from "gatsby"
import styles from "./header.module.scss"
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
	 
		</nav>

    	
  </div>
)