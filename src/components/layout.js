import React from "react"
import styles from './layout.module.scss';
import Header from "../sections/header"
import Footer from "../sections/footer"

export default ({ children }) => (
  <div className={styles.layout}>
  <Header></Header>
  	{children}
<Footer></Footer>
    	
  </div>
)