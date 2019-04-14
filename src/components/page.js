import React from "react"
import pageStyles from "./page.module.scss"

export default ({ children }) => (
    <div className={pageStyles.nav}>
      {children}
   
    </div>
)