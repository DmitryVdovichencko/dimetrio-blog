import React from "react"
import styles from "./content.module.scss"
import {project__link} from './project.module.scss'
import { InlineIcon } from '@iconify/react';
import githubOutline from '@iconify/icons-ant-design/github-outline';
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
        <div className={styles.content__links}>
        <a className={project__link} href={ `/${props.link}`}> Read more... </a>
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
        <div className={styles.content__links}>
        <a className={project__link} href={props.link}> {props.caption} </a>
        <a  href={props.repo} ><InlineIcon height='1.6em' icon={githubOutline} color="rgba(89,81,176,1)" className={styles.content__repo}/></a>
        </div>
        <DateComponent dateStr={props.date}></DateComponent>
      
      
      

  
    
    </div>
  )
  }

}
export default Content;