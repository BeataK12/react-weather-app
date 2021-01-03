import React from "react";



export default function SearchForm() {
  return (
    <div className="input-form">
      <form id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              autoComplete="off"
              autoFocus="on"
              id="search-city"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="w-100" />
          </div>
          <div className="col-3">
            <button id="current-location" className="btn btn-primary w-100">
              Current
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
