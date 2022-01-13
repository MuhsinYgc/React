import React, { useState, useRef,useEffect,useCallback } from "react";
import { Link } from "react-router-dom";

// const[searchQuery,setSearchQuery]=useState(0)


const SearchBar = () => {
  const inputRef = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();

  };
  // const searchMovie = useCallback((event) => {
  //   setSearchQuery = event.target.value;
  // }, []);


//   useEffect(()=>{
//     setSearchQuery()
// },[])


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row mb-5">
        <div className="col-10">
          <input
            ref={inputRef}
            onChange={(event)=>(event.target.value)}
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
