import React from "react"
import navStyles from "./nav.module.css"

export default ({ children }) => (
  <div className={navStyles.nav}>
    {children}
 
  </div>
)