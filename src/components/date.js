import React from "react";
import { InlineIcon } from '@iconify/react';
import calendarAlt from '@iconify/icons-dashicons/calendar-alt';
import styles from "./date.module.scss"



const DateComponent = (props) => (
	<div className={props.theme==="dark" ? styles.date_dark : styles.date_light}>
		
    
   
	    
	          <InlineIcon icon={calendarAlt} className={styles.dateIcon} />
	          <span>{props.dateStr}</span>
          

    	
  </div>
)

 export default DateComponent;