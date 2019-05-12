import React from "react"
import styles from './layout.module.scss';
import Header from "../sections/header"
import Footer from "../sections/footer"






export default (props) => (
  <div className={styles.layout}>
  <Header displayBg = {props.path==="/"}></Header>
  	{props.children}
  
<Footer displayBg = {props.path==="/"} ></Footer>
    	
  </div>
)

