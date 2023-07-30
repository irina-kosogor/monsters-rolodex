import { DeleteButton } from "./Button/Button";
import "./Card.css";

export const Card = ({ monster, deleteMonster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <DeleteButton
        text={"Delete monster"}
        className="delete-btn"
        handleClick={deleteMonster}
      />
    </div>
  );
};
