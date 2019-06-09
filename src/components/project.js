import React from 'react';
import { InlineIcon } from '@iconify/react';
import githubOutline from '@iconify/icons-ant-design/github-outline';
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
   <div>
    
        <PreviewProject
        name={name}
        img_src={logo.image.src}
        img_title={logo.title}
        type={type}
        content={{__html: content }}
        publishedDate={publishedDate}
        projectUrl={projectUrl}
        repositoryUrl={repositoryUrl}
        >
        </PreviewProject>
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
            <a className="project__repo" href={repositoryUrl}><InlineIcon icon={githubOutline} /></a>
    
    
        </div>
      );
  }

  }
  export default Project;
