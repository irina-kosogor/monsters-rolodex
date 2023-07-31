import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { text, handleClick } = this.props;

    return (
      <button className="primary-btn" onClick={handleClick}>
        {text}
      </button>
    );
  }
}

export default Button;
