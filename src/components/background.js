import React from "react"
export default () => (
<div className="background">
<div className="header-section">
    <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-clip-trapezoid" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0, 1 0.7" />
					</clipPath>
				</defs>
		</svg>
    </div>
    <div className="projects-section">
      <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-project" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0.2, 1 0.8" />
					</clipPath>
				</defs>
		    </svg>
            
    </div>
    <div className="posts-section">
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