import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import developer from "../assets/img/developer.svg" 
import cat from "../assets/img/cat.svg" 
import flower from "../assets/img/flower.svg" 
// import laptop from "../assets/img/laptop.svg" 


export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Layout>
    <Header>
    
   
     
  

      </Header>
      <div className='hero-image'>
      <div className="dev">
      <object type="image/svg+xml" className="dev__img" data={developer}>Your browser does not support SVGs</object>
      <svg width="350" height="150" className="dev__laptop" >
        <rect rx="20" ry="20" width="350" height="150" />
        </svg> 
      </div>
     
      <object type="image/svg+xml" className="cat-img" data={cat}>Your browser does not support SVGs</object>
      <object type="image/svg+xml" className="flw-img"data={flower}>Your browser does not support SVGs</object>
      </div>
    </Layout>
  </div>

}


