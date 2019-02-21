import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import profile from "../assets/img/profile.jpeg" 

export default () => (
  <div>
  <Header></Header>
  <div className="profile">
    <div className="profile__header">
      <img className="profile__img" src={profile}></img>
      <h1>
        Dmitry Vdovichenko 
        <span className="profile__lang">En Ru</span>
      </h1>
     


      
    </div>
    <div className="profile__content">
      
    </div>
  </div>
  </div>
)