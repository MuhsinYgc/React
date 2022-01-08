import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const inputRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row mb-5">
        <div className="col-10">
          <input
            ref={inputRef}
            onChange={props.searchMovieProps}
            type="text"
            className="form-control"
            placeholder="Search a movie"
          ></input>
        </div>
        <div className="col-2">
          <Link
            to="/add"
            type="button"
            className="btn btn-md btn-dange"
            style={{ float: "right" }}
          >
            Add movie
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
