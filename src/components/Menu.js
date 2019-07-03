import React from 'react';
import { Link } from "gatsby";
import styles from './menu.module.scss';
import NavLink from './NavLink';




class Menu extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      isOpen:false,
      
    };
    this.openMenu =this.openMenu.bind(this)
    
  }
 

  openMenu(event){
    if(event.currentTarget.classList.contains(styles.menuButton)||
        event.currentTarget.classList.contains(styles.menuButton_close)||
        event.currentTarget.parentElement.classList.contains(styles.nav_mobile)
        ){
        let {isOpen} = this.state;
    document.body.style.maxHeight = this.state.isOpen ? "100vh" : "none";
        document.body.style.overflow = this.state.isOpen ? "hidden": "visible"; 
   
    this.setState({
      isOpen:!isOpen
    })
    }
  
 


  }

  componentDidUpdate() {
   
        document.body.style.maxHeight = this.state.isOpen ? "100vh" : "none";
        document.body.style.overflow = this.state.isOpen ? "hidden": "visible"; 
      
  }




  render(props) {
    
   
    return (
      
     

        
        <div className={styles.menu}>
        
                <Link  className={styles.title} to={this.props.header.headerLink}>
                    <h1>{this.props.header.headerName}</h1>
                </Link>
   
            <nav className={this.state.isOpen ? styles.nav_mobile : styles.nav} >

               <div className={styles.nav__links} onClick={this.openMenu} >
                {
                this.props.links.map((link,i) => {
                    return <NavLink key={i} refLink={link.refLink} nameLink = {link.nameLink} />
                  
                  })
                }
             
                 </div>
            
            </nav>
            <div className={this.state.isOpen ? styles.menuButton_close : styles.menuButton} onClick={this.openMenu}>
                <div className={styles.menuButton__bar}></div>
                <div className={styles.menuButton__bar}></div>
                <div className={styles.menuButton__bar}></div>
            </div>
        </div>

       
        
      
)

    
  }
}
export default Menu;



