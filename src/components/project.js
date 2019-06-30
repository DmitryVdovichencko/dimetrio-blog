import React from 'react';
import { InlineIcon } from '@iconify/react';
import githubOutline from '@iconify/icons-ant-design/github-outline';
import PreviewProject from './previewProject';
import styles from './project.module.scss'

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
        img_src={logo.file.url}
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
    
        <div className={styles.project}>
        
            <h1>{name}</h1>
            <p className="project__type">{type}</p>
            <p className="project__descr" dangerouslySetInnerHTML={{__html: content }}></p>
            <a className={styles.project__link} href={projectUrl}> {name} </a>
            <a  href={repositoryUrl}><InlineIcon height='1.6em' className={styles.project__repo} icon={githubOutline} /></a>
    
    
        </div>
      );
  }

  }
  export default Project;
