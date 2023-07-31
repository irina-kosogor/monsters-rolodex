import { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    const { placeholder, handleChange } = this.props;
    return (
      <div className="search-bar">
        <input
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
