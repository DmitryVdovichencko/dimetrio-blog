import React from 'react';



const Skill= ({
  name,
  img,
  description,
  

  

}) => (
  
  <div className="skill">
      <div className="skill__header">
        
          <h2 className="skill__name">{name}</h2>
          <img src={img.file.url}></img>
      </div>
      <section className="skill__description">
   
          <p className="skill__learning" dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html }}></p>
         
      </section>
   
  </div>
  
);
export default Skill;