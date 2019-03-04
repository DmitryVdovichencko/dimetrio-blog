import React from "react"

import developer from "../assets/img/developer.svg" 
import cat from "../assets/img/cat.svg" 
import flower from "../assets/img/flower.svg" 

export default () => (
  <div className='hero-image'>
  <div className="dev">
  <object type="image/svg+xml" className="dev__img" data={developer}>Your browser does not support SVGs</object>
  <svg width="100%" height="200" className="dev__laptop" viewBox="0 0 95% 180" >
    <rect x="10" y="10"rx="20" ry="20" width="90%" height="170" />
    <linearGradient id="linear-gradient">
    <stop offset="0%" stop-color="#360033"/>
    <stop offset="100%" stop-color="#0b8793"/>
  </linearGradient>

   <text x="55" y="90" class="main"> 
   {String.fromCharCode(60)} 
   {String.fromCharCode(47)}
   {String.fromCharCode(62)}
   </text>
   <text x="100" y="80"class="main">front-end</text>
   <text x="100" y="100"class="main">developer</text>
   <text x="55" y="90" class="main-1">
   {String.fromCharCode(60)} 
   {String.fromCharCode(47)}
   {String.fromCharCode(62)}   
   </text>
   <text x="100" y="80"class="main-1 first">front-end</text>
   <text x="100" y="100"class="main-1">developer</text>
    </svg> 
  </div>
 
  <object type="image/svg+xml" className="cat-img" data={cat}>Your browser does not support SVGs</object>
  <object type="image/svg+xml" className="flw-img"data={flower}>Your browser does not support SVGs</object>
  </div>
)