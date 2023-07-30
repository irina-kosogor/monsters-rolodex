import "./Button.css";

export const DeleteButton = ({ text, className, handleClick }) => (
  <button className={className} onClick={handleClick}>
    {text}
  </button>
);
