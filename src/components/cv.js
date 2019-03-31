import React from "react"
import { Link } from "gatsby"


    const CV = ({
        name,
        otherlang,
        skills,
        projects
        
      
      }) => {

        if (otherlang === 'en'){
          return(
        
            <div className="cv">
                <h1 className="cv__name">{name}</h1>
                <Link to={"/about/"}>{otherlang}</Link>
                <section className="cv__skill">{skills}</section>
                <section className="cv__skill">{projects}</section>
                
            </div>
           
        );
        }else{
        return(
        
        <div className="cv">
            <h1 className="cv__name">{name}</h1>
            <Link to={`/about-${otherlang}/`}>{otherlang}</Link>
            <section className="cv__skill">{skills}</section>
            <section className="cv__skill">{projects}</section>
            
        </div>
       
    );}
        }
    
    export default CV;