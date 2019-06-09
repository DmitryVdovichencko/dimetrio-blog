import React from "react";
import { InlineIcon } from '@iconify/react';
import calendarAlt from '@iconify/icons-dashicons/calendar-alt';
import styles from "./date.module.scss"



const DateComponent = ({dateStr}) => (
	<div className={styles.date}>
		
    
   
	    
	          <InlineIcon icon={calendarAlt} className={styles.dateIcon} />
	          <span>{dateStr}</span>
          

    	
  </div>
)

 export default DateComponent;