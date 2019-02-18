import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import logo from "../assets/img/web-developer.svg" 



export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Layout>
    <Header>
    
   
     
  

      </Header>
      <div className='hero-image'>
      <img src={logo} alt="Logo" />
      </div>
    </Layout>
  </div>

}


