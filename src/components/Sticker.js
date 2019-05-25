import React from "react"
import styles from "./sticker.module.scss"

class Sticker extends React.Component {
  state = { loaded: false };

  onLoad = () => {

   

      this.setState({ loaded: true });
      console.log("Loaded!");
    
    
  };

  render() {
    const { loaded } = this.state;

    return (
      <object type="image/svg+xml" className = {styles.sticker + (loaded ? (" "+styles.active) : "")} data={this.props.stickerName} onLoad={this.onLoad}>Your browser does not support SVGs</object>

    );
  }
}
export default Sticker;