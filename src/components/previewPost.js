import React from "react"
import styles from "./preview.module.scss"
import DateComponent from "./date"

const PreviewPost = props => (
    <div className={styles.preview}>
   
   <h1 className={styles.preview__header}>{props.name}</h1>

            <img className={styles.preview__postImg} src={props.img_src} alt={props.img_title} />
            <div className={styles.preview__content}>
              <p className={styles.preview__type}>{props.type}</p>
              <DateComponent dateStr={props.publishedDate} theme="dark"></DateComponent>
              
              <p className={styles.preview__excerpt} dangerouslySetInnerHTML={props.content}></p>
            </div>

    
    </div>
  )
export default PreviewPost;