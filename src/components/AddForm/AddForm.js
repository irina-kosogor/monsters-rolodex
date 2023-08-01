import { Component } from "react";
import Button from "../Button/Button";
import "./AddForm.css";

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsterName: "",
      monsterEmail: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ monsterName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ monsterEmail: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.monsterName.trim() === "") {
      alert("Please enter monster name");
      return;
    }

    const newMonster = {
      name: this.state.monsterName,
      email: this.state.monsterEmail,
    };

    this.props.onAddMonster(newMonster);
    this.setState({ monsterName: "", monsterEmail: "" });
  };

  render() {
    return (
      <form action="#" className="add-form">
        <div className="add-form__wrapper">
          <label htmlFor="monster-name"></label>
          <input
            type="text"
            id="monster-name"
            onChange={this.handleNameChange}
          />
          <label htmlFor="monster-email"></label>
          <input
            type="text"
            id="monster-email"
            onChange={this.handleEmailChange}
          />
        </div>
        <Button text={"Add monster"} handleClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddForm;
