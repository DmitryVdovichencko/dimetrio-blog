import React from "react"
import navStyles from "./nav.module.scss"

export default ({ children }) => (
  <div className={navStyles.nav}>
    {children}
 
  </div>
)