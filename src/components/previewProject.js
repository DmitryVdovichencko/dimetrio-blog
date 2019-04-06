import React from "react"
import styles from "./preview.module.scss"


const PreviewProject = props => (
    <div className={styles.preview}>
   
   <h1 className={styles.preview__header}>{props.name}</h1>
      <div className={styles.preview__content}>
            <img className={styles.preview__img} src={props.img_src} alt={props.img_title} />
            <p className={styles.preview__type}>{props.type}</p>
            <p className={styles.preview__date} >{props.publishedDate}</p>
            <p className={styles.preview__descr} dangerouslySetInnerHTML={props.content}></p>
      
            <a className={styles.preview__url} href={props.projectUrl}> {props.name}</a>
            <a className={styles.preview__repo} href={props.repositoryUrl}>{props.name} github repository</a>
      </div>
    
    </div>
  )
export default PreviewProject;