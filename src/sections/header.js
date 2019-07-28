import React from "react"
import Bg from "../components/bg"
import bgStyles from "../components/background.module.scss"
import Menu from "../components/Menu"

const links = [{nameLink:'main',refLink:'/'},{nameLink:'articles',refLink:'/articles/'},{nameLink:'projects',refLink:'/projects/'},{nameLink:'about',refLink:'/about/'},];
export default (props, { data }) => {
   
    return(
        
         <header>   
            <Menu header={{headerName:'Dmitry Vdovichenko',headerLink:'/'}} links={links}></Menu>
                 { props.displayBg ? <Bg 
      points="0 1, 0 0, 1 0, 1 0.7"
      id="polygon-clip-trapezoid"
      className={bgStyles.header__section}
      ></Bg>  : null }  
        
        </header>
        
        
    )

    }
