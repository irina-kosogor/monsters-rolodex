import { Card } from "../Card/Card.js";
import "./CardsList.css";

export const CardsList = ({ monsters, onDeleteMonster }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <Card
            key={monster.id}
            monster={monster}
            deleteMonster={() => onDeleteMonster(monster.id)}
          />
        );
      })}
    </div>
  );
};
