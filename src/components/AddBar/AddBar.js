import { useState } from "react";
import "./AddBar.css";

export const AddBar = ({ onAddMonster }) => {
  const [monsterName, setMonsterName] = useState("");
  const [monsterEmail, setMonsterEmail] = useState("");

  const handleNameChange = (event) => {
    setMonsterName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setMonsterEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (monsterName.trim() === "") {
      alert("Please enter a monster name.");
      return;
    }

    const newMonster = {
      name: monsterName,
      email: monsterEmail,
    };

    onAddMonster(newMonster);
    setMonsterName("");
    setMonsterEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="monster-add">
      <label htmlFor="monster-name">Monster Name:</label>
      <input
        type="text"
        id="monster-name"
        value={monsterName}
        onChange={handleNameChange}
      />
      <label htmlFor="monster-email">Monster Email:</label>
      <input
        type="email"
        id="monster-email"
        value={monsterEmail}
        onChange={handleEmailChange}
      />
      <button type="submit" className="add-btn">
        Add monster
      </button>
    </form>
  );
};
