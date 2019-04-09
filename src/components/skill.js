import React from 'react';
import styles from "./skill.module.scss"



const Skill= ({
  name,
  img,
  description,
  

  

}) => (
  
  <div className={styles.skill}>
      <div className={styles.skill__header}>
        
          <h2 className={styles.skill__name}>{name}</h2>
          <img className={styles.skill__img} src={img.file.url} alt="icon"></img>
      </div>
      <section className={styles.skill__description}>
   
          <p className={styles.skill__learning} dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html }}></p>
         
      </section>
   
  </div>
  
);
export default Skill;