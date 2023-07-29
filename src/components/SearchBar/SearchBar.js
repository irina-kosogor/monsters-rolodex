import "./SearchBar.css";

export const SearchBar = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-bar ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
