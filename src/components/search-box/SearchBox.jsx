import React from "react";
import "./SearchBox.css";

function SearchBox({ placeholder, onSearch, type }) {
  return (
    <div>
      <input
        className="search-box"
        type={type}
        placeholder={placeholder}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBox;
