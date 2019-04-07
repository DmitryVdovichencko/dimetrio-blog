import React from "react"
import styles from "./post.module.scss"

const Post = props => (
    <div className={styles.post}>
   
        <img src={props.img} alt="post cover" className={styles.post__img}></img>
        <article>
          <h1 className={styles.post__header}>{props.caption}</h1>
          <p className={styles.post__date}>{props.date}</p>
        <div dangerouslySetInnerHTML={props.html} className={styles.post__content}></div>
        </article>
  
    
    </div>
  )
export default Post;