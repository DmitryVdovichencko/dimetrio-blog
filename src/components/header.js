import React from "react";

import { Link } from "gatsby"
export default () => (
	<div className="header">
		
    
   
		<nav className='nav'>
		<Link className="nav__header" to="/">
			<h1>Dmitry Vdovichenko</h1>
		</Link>
		<div className='nav__menu'>
		 
			<Link className="nav__links" to="/articles/">
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
    <svg className="clip-svg">
				<defs>
					<clipPath id="polygon-clip-trapezoid" clipPathUnits="objectBoundingBox">
						<polygon points="0 1, 0 0, 1 0, 1 0.7" />
					</clipPath>
				</defs>
		</svg>
    	
  </div>
)