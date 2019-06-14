import React from 'react';
import { InlineIcon } from '@iconify/react';
import Github from '@iconify/icons-ant-design/github-fill';
import Medium from '@iconify/icons-ant-design/medium-square-fill';
import Twitter from '@iconify/icons-ant-design/twitter-outline';
import Mail from '@iconify/icons-ic/baseline-mail';
import styles from "./contacts.module.scss"

const Icons = {github: Github, medium:Medium, twitter:Twitter, mail:Mail}
const Contacts = props => (

<div className = {styles.contacts}>
	{props.contacts.map(
		(contact,i)=>(
			<a href = {contact.url} key={i}>
				<InlineIcon icon={Icons[contact.name.toLowerCase()]} />
			</a>
			)
	)
		


	}
</div>
)


export default Contacts;