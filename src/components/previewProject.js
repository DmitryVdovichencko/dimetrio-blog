import React from "react"
import { Icon, InlineIcon } from '@iconify/react';
import githubOutline from '@iconify/react/ant-design/github-outline';
import styles from "./preview.module.scss"
import DateComponent from "./date"

const PreviewProject = props => (
    <div className={styles.preview}>
   
   <h1 className={styles.preview__header}>{props.name}</h1>
      <div className={styles.preview__content}>
            <img className={styles.preview__img} src={props.img_src} alt={props.img_title} />
            <p className={styles.preview__type}>{props.type}</p>
            <DateComponent dateStr={props.publishedDate}></DateComponent>
            <p className={styles.preview__descr} dangerouslySetInnerHTML={props.content}></p>
            <p className={styles.preview__links} >
              <a className={styles.preview__repo} href={props.repositoryUrl}><Icon icon={githubOutline} height="30px" /></a>
              <a className={styles.preview__url} href={props.projectUrl}> {props.name}</a>
            </p>
      </div>
    
    </div>
  )
export default PreviewProject;