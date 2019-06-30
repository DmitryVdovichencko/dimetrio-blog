import React from "react"
import styles from "./content.module.scss"
import DateComponent from "./date"
const Content = props => {
 
 if(props.type === "article"){
    return(
    <div className={styles.content} >
        

      <a href={ `/${props.link}`}>
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

 } 
if (props.type === "project"){
  const description= props.descr.childMarkdownRemark.html;
        return(
    <div className={styles.content} >
        

      
        <h2 className={styles.content__header}>{props.caption}</h2>
        <div className={styles.content__descr}>
        <img className={styles.content__img} src={props.img} alt={props.imgTitle}/>
        <p className={styles.content__text} dangerouslySetInnerHTML={{__html: description }}>
       
        </p>

        
        </div>
        <DateComponent dateStr={props.date}></DateComponent>
      
      
      

  
    
    </div>
  )
  }

}
export default Content;