import { useState, useEffect } from "react";
import { CardsList } from "./components/CardsList/CardsList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./App.css";
import { AddBar } from "./components/AddBar/AddBar";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  // const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  // useEffect(() => {
  //   const newFilteredMonsters = monsters.filter((monster) => {
  //     return monster.name.toLocaleLowerCase().includes(searchField);
  //   });

  //   setFilteredMonsters(newFilteredMonsters);
  // }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const deleteMonster = (id) => {
    const updatedMonsters = monsters.filter((monster) => monster.id !== id);
    setMonsters(updatedMonsters);
  };

  const generateNextId = (monsters) => {
    return monsters.map((item) => item.id).sort((a, b) => b - a)[0] + 1;
  };

  const addMonster = (newMonster) => {
    setMonsters([...monsters, { ...newMonster, id: generateNextId(monsters) }]);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <AddBar onAddMonster={addMonster} />
      <SearchBar
        className="monster-search-bar"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardsList
        monsters={monsters.filter((monster) =>
          monster.name.includes(searchField)
        )}
        onDeleteMonster={deleteMonster}
      />
    </div>
  );
}

export default App;
