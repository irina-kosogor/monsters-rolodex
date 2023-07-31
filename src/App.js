import { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";
import CardList from "./components/CardList/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    this.fetchMonsters();
  }

  fetchMonsters() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ monsters: data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  handleSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  handleDeleteMonster = (id) => {
    this.setState((prevState) => ({
      monsters: prevState.monsters.filter((monster) => monster.id !== id),
    }));
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBar
          placeholder="search monsters"
          handleChange={this.handleSearchChange}
        />
        <CardList
          monsters={filteredMonsters}
          handleDeleteMonster={this.handleDeleteMonster}
        />
      </div>
    );
  }
}

export default App;
