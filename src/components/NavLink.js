import React from 'react';
import { Link } from "gatsby";
import styles from './navLink.module.scss';

const NavLink = (props)=> {
	return <Link className={styles.link} to={props.refLink} > {props.nameLink} </Link>
	}

export default NavLink;
