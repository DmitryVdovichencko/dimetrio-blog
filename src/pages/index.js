import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import logo from "../assets/img/web-developer.svg" 



export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Layout>
    <Header>
    
   
      <nav className='nav'>
      <Link to="/">
        <h1>Dmitry Vdovichenko</h1>
      </Link>
      <div className='nav__menu'>
       
        <Link className="nav__links" to="/">
          articles
        </Link>
        <Link className="nav__links" to="/">
          projects
        </Link>
        <Link className="nav__links" to="/about-css-modules/">
          about
        </Link>
        </div>
     
      </nav>

      </Header>
      <div className='hero-image'>
      <img src={logo} alt="Logo" />
      </div>
    </Layout>
  </div>

}


