import React from 'react';
import { Link } from "gatsby";
import styles from './menu.module.scss';
import NavLink from './NavLink';

// function handleClick(event) {


    
//         event.currentTarget.classList.toggle(styles.nav__menu_toggle_close);
//         event.currentTarget.parentElement.classList.toggle(styles.nav__menu_mobile);

//         document.body.style.maxHeight = (document.body.style.maxHeight!=="100vh"&& event.currentTarget.parentElement.classList.contains(styles.nav__menu_mobile)) ? "100vh" : "none";
//         document.body.style.overflow = (event.currentTarget.parentElement.classList.contains(styles.nav__menu_mobile)) ? "hidden": "visible";
        
        
    
// }
// const Menu = ({header, links})=> {
    
//     return (
        
//         <div className={styles.header}>
        
    
   
//             <nav className={styles.nav}>

//                 <Link  className={styles.nav__header} to={header.headerLink}>
//                     <h1>{header.headerName}</h1>
//                 </Link>
//            <div className={styles.nav__menu}>
//             {
//             links.map((link,i) => {
//                 return <NavLink key={i} refLink={link.refLink} nameLink = {link.nameLink} />
              
//               })
//             }
         
//              </div>
            
//             </nav>
//             <div className={styles.nav__menu_toggle} onClick={handleClick}>
//                 <div className={styles.nav__bar}></div>
//                 <div className={styles.nav__bar}></div>
//                 <div className={styles.nav__bar}></div>
//             </div>
//         </div>
//     );
// }
// export default Menu;


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
    console.log(this.state.isOpen)
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



