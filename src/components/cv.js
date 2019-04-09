import React from "react"
import { Link } from "gatsby"
import styles from "./cv.module.scss"

    const CV = ({
        name,
        otherlang,
        skills,
        projects
        
      
      }) => {

        if (otherlang === 'en'){
          return(
        
            <div className={styles.cv}>
                <div className={styles.cv__header}>
                    <h1 className={styles.cv__name}>{name}</h1>
                    <Link className={styles.cv__lang} to={"/about/"}>{otherlang}</Link>
                </div>
                <section className="cv__skill">{skills}</section>
                <section className="cv__skill">{projects}</section>
                
            </div>
           
        );
        }else{
        return(
        
        <div className={styles.cv}>
        <div className={styles.cv__header}>
            <h1 className={styles.cv__name}>{name}</h1>
            <Link className={styles.cv__lang} to={`/about-${otherlang}/`}>{otherlang}</Link>
        </div>
            <section className="cv__skill">{skills}</section>
            <section className="cv__skill">{projects}</section>
            
        </div>
       
    );}
        }
    
    export default CV;