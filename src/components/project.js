import React from 'react';

import PreviewProject from './previewProject';

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
   
    
        <PreviewProject
        name={name}
        img_src={logo.image.src}
        img_title={logo.title}
        type={type}
        content={{__html: content }}
        publishedDate={publishedDate}
        projectUrl={projectUrl}
        repositoryUrl={repositoryUrl}
        ></PreviewProject>
       
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
