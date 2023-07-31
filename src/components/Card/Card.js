import { Component } from "react";
import Button from "../Button/Button";
import "./Card.css";

class Card extends Component {
  handleDeleteClick = () => {
    const { id } = this.props.monster;
    const { handleDeleteMonster } = this.props;
    handleDeleteMonster(id);
  };

  render() {
    const { name, id, email } = this.props.monster;

    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
        <Button text={"Delete monster"} handleClick={this.handleDeleteClick} />
      </div>
    );
  }
}

export default Card;
