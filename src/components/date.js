import React from "react";
import { Icon } from '@iconify/react';
import calendarAlt from '@iconify/react/dashicons/calendar-alt';
import styles from "./date.module.scss"



const DateComponent = ({dateStr}) => (
	<div className={styles.date}>
		
    
   
	    
	          <Icon icon={calendarAlt} className={styles.dateIcon} />
	          <span>{dateStr}</span>
          

    	
  </div>
)

 export default DateComponent;