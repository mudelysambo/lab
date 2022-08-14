import React from "react";
import "./SearchButton.css";

function SearchButton() {
  return (
    <div className="heading">
      <h1>Search Bookings</h1>

      <p className="label">Search Bookings</p>
      <p className="label">Search Bookings</p>

      <div className="text">
        <input type="text" />
        <button>Search IDs</button>

        <input type="text" />
        <button>Search Names</button>
      </div>
    </div>
  );
}
export default SearchButton;
