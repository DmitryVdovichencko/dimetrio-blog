import React from "react"

import Menu from "../components/Menu"

const links = [{nameLink:'about',refLink:'/about/'},{nameLink:'main',refLink:'/'}];
export default ({ data }) => {
   
    return(
        
            
            <Menu header={{headerName:'Dmitry Vdovichencko',headerLink:'/'}} links={links}></Menu>
   
        
        
        
    )

    }
