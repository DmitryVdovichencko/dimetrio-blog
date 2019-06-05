import React from "react"
import styles from "./heroImage.module.scss"
import developer from "../assets/img/developer.svg" 
import cat from "../assets/img/cat.svg" 
import flower from "../assets/img/flower.svg" 


export default () => (
  <div className={styles.image}>
  <div className={styles.dev}>
  <object type="image/svg+xml" className={styles.dev__img}  data={developer}>Your browser does not support SVGs</object>
  
   
   <div className={styles.dev__laptop}>

    </div>
  </div>
 

  <object type="image/svg+xml"  className={styles.cat} data={cat} viewBox="0 0 100% 100%" preserveAspectRatio="xMinYMid meet" >Your browser does not support SVGs</object>

  <object type="image/svg+xml" className={styles.flower} data={flower}>Your browser does not support SVGs</object>
  </div>
)