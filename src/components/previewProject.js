import React from "react"
import { InlineIcon } from '@iconify/react';
import githubOutline from '@iconify/icons-ant-design/github-outline';
import styles from "./preview.module.scss"
import DateComponent from "./date"

const PreviewProject = props => (
    <div className={styles.preview}>
   
   <h1 className={styles.preview__header}>{props.name}</h1>
      <div className={styles.preview__content}>
            <img className={styles.preview__img} src={props.img_src} alt={props.img_title} />
            <div className = {styles.preview__tags}>
              {props.type.split(',').map((type,i)=><p key = {i} className={styles.preview__tag}>{type}</p>)}
            </div>
            
            <DateComponent dateStr={props.publishedDate} theme="dark"></DateComponent>
            <p className={styles.preview__descr} dangerouslySetInnerHTML={props.content}></p>
            <p className={styles.preview__links} >
              <a className={styles.preview__repo} href={props.repositoryUrl}><InlineIcon icon={githubOutline} color="rgba(89,81,176,1)" height="30px" /></a>
              <a className={styles.preview__url} href={props.projectUrl}> {props.name}</a>
            </p>
      </div>
    
    </div>
  )
export default PreviewProject;