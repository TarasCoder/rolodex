import React from "react";
import "./SearchBox.css";

function SearchBox({ placeholder, onSearch }) {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBox;
