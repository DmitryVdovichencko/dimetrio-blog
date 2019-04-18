import React from "react"
import Header from "../components/header"
import Menu from "../components/Menu"

const links = [{nameLink:'about',refLink:'/about/'},{nameLink:'main',refLink:'/'}];
export default ({ data }) => {
   
    return(
        <div>
            <Header></Header>
            <Menu header={{headerName:'Dmitry Vdovichencko',headerLink:'/'}} links={links}></Menu>
   
        </div>
        
        
    )

    }
