import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const filterId = useId();
  return (
    <div className={css.filterWrapper}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        id={filterId}
        onChange={(event) => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
};
export default SearchBox;
