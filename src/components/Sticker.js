import React from "react"
import styles from "./sticker.module.scss"

    
    function debounce(func, wait = 20, immediate = true) {
      var timeout; // declare timeout
      return function() { 
        //return anonymous function
        //inside it we create vars for context object and arguments
        var context = this, args = arguments;
        // later is a function wich reset timeout
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);

        };
        //here we are in the beginning we have immediate===true and timeout as undefined so callNow is true
        var callNow = immediate && !timeout;
        //then we clearTimeout
        clearTimeout(timeout);
        // and we set timeout as timer for later function, with time 20ms in wait arg
        timeout = setTimeout(later, wait);
        //as we seen above callNow is true so we apply to our func context and args
        if (callNow) func.apply(context, args);
        // so if we try to call func in less then 20ms after last call...
        // we have timeout, which was set from last func call
        // only when wait time expired we run later function which reset timeout to null so we can call func again
      };
    }
    const sliderStickers = document.querySelectorAll(styles.sticker);
    function checkScroll(e) {
    	
      sliderStickers.forEach(slideSticker=>{
          //calculate where we are

          const slidePos = (window.scrollY + window.innerHeight),
         	halfImageShown = slidePos > 1000,	
        
          notScrolledPast = window.scrollY > 2500;
          if (halfImageShown && notScrolledPast){
          	console.log(window.scrollY);
            slideSticker.classList.add('active');
          }
          else{
            slideSticker.classList.remove('active');
          }

        }
        )
    }
    window.addEventListener('scroll', debounce(checkScroll));

export default (props) => (
	
	 <object type="image/svg+xml" className = {styles.sticker} data={props.stickerName}>Your browser does not support SVGs</object>
	
)