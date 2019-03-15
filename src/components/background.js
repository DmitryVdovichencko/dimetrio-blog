import React from "react"
import styles from "./background.module.scss"
export default () => (
<div className={styles.background}>
<div className={styles.header__section}>
    <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-clip-trapezoid" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0, 1 0.7" />
					</clipPath>
				</defs>
		</svg>
    </div>
    <div className= {styles.projects__section}>
      <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-project" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0.2, 1 0.8" />
					</clipPath>
				</defs>
		    </svg>
            
    </div>
    <div className={styles.posts__section}>
      <svg className="clip-svg">
				<defs>
          <clipPath id="polygon-post" clipPathUnits="objectBoundingBox">
						<polygon points="0 0.8, 0 0, 1 0.2, 1 1" />
					</clipPath>
				</defs>
		    </svg>
    </div>
  </div>
)