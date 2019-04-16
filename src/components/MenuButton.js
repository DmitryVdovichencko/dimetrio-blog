import React, {Component} from 'react';
import styles from './header.module.scss'

class MenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 350
            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.closeNav);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
    }

    openNav() {
        const style = { width : 350 };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.body.style.maxHeight = "100vh";
        document.addEventListener("click", this.closeNav);
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "none";
        document.body.style.maxHeight = "none";
    }

    render() {
        return (
          
           <div className={styles.nav__menu_toggle} onClick={handleClick}>
                <div className={styles.nav__bar}></div>
                <div className={styles.nav__bar}></div>
                <div className={styles.nav__bar}></div>
            </div>
         
        );
    }

}
ReactDOM.render(
  <MenuButton />,
  document.getElementById('test')
);
}
export default MenuButton;