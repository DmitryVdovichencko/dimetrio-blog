import React from "react"
import HeroImage from "../components/hero_image/hero_image" 
import { Link } from "gatsby"
import Nav from "../components/nav/nav"
import Header from "../components/header/header"


export default ()=> {
  // Import result is the URL of your image
  return <div>
    <Header>
    <h1>Dmitry Vdovichenko</h1>
    <Nav>
      <Link to="/about-css-modules/">
        about
      </Link>
    </Nav>

  </Header>
<HeroImage></HeroImage>
  </div>

}


