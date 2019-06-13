    import React from "react"

export default (props) => (
    <div className= {props.className}>
      <svg className="clip-svg">
				<defs>
					<clipPath id={props.id} clipPathUnits="objectBoundingBox">
						<polygon points={props.points} />
					</clipPath>
				</defs>
		    </svg>
            {props.children}
    </div>
    )