import React from "react"
import styles from "./content.module.scss"
import DateComponent from "./date"
const Content = props => (
    <div className={styles.content} key={props.key}>
        

      <a href={ props.type === "article" ? `/${props.link}`: props.link}>
        <h2 className={styles.content__header}>{props.caption}</h2>
        <div className={styles.content__descr}>
        <img className={styles.content__img} src={props.img} alt={props.imgTitle}/>
        <p className={styles.content__text}>
        {props.descr}
        </p>

        
        </div>
        <DateComponent dateStr={props.date}></DateComponent>
      
      </a>
      

  
    
    </div>
  )
export default Content;