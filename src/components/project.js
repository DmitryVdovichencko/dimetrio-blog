import React from 'react';

const Project = ({
    name,
    description,
    projectUrl,
    repositoryUrl,
    type,
    publishedDate,
    logo,
    preview,
    cv
  }) => {
  const content = description.childMarkdownRemark.html;
  if(preview){
    return(
    
        <div className="project preview-box">
        
            <h1>{name}</h1>
            <img className="project__img preview-box__img" src={logo.image.src} alt={logo.title} />
            <p className="project__type">{type}</p>
            <p className="project__descr" dangerouslySetInnerHTML={{__html: content }}></p>
            <p className="project__date">{publishedDate}</p>
            <a className="project__url" href={projectUrl}> {name}</a>
            <a className="project__repo" href={repositoryUrl}>{name} github repository</a>
    
    
        </div>
      );
  }
  if(cv){
    return(
    
        <div className="project">
        
            <h1>{name}</h1>
            <p className="project__type">{type}</p>
            <p className="project__descr" dangerouslySetInnerHTML={{__html: content }}></p>
            <a className="project__url" href={projectUrl}> {name}</a>
            <a className="project__repo" href={repositoryUrl}>{name} github repository</a>
    
    
        </div>
      );
  }

  }
  export default Project;
