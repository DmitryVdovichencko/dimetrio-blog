import React from "react"
import headerStyles from "./header.module.css"

export default ({ children }) => (
  <div className={headerStyles.header}>{children}
    <svg class="clip-svg">
				<defs>
					<clipPath id="polygon-clip-trapezoid" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0, 1 0.7" />
					</clipPath>
				</defs>
		</svg>
    	
  </div>
)