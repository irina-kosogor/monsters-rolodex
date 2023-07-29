import { useState, useEffect } from "react";
import { CardsList } from "./components/CardsList/CardsList";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBar
        className="monster-search-bar"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardsList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
