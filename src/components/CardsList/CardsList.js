import { Card } from "../Card/Card.js";
import "./CardsList.css";

export const CardsList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);
