import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useInput } from "../useInput/useInput";


const EditMovie = (props) => {
  const [load, setLoad] = useState(0);
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
   const id = props.match.params.id;
    load();
    setCount({
      name: props.movie.name,
      rating: props.movie.rating,
      overview: props.movie.overview,
      imageURL: props.movie.imageURL,
    });
  }, []);

  load = async () => {
    const response = await axios.get(`http://localhost:3002/movies/${props.id}`);
    props.movie = response.data;
  };

  const localStorageInputs = localStorage.getItem("inputs");

  const INITIAL_STATE = {
    name: "",
    rating: "",
    overview: "",
    imageURL: "",
  };

  const [inputs, setInputs] = useInput(
    JSON.parse(localStorageInputs) || INITIAL_STATE
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, rating, overview, imageURL } = this.state;
    const id = props.match.params.id;
    const updatedMovie = {
      name: name,
      rating: rating,
      overview: overview,
      imageURL: imageURL,
    };
    props.onEditMovie(id, updatedMovie);
    props.history("/");
  };

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  return (
    <div className="container">
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <input
          ref={inputRef}
          className="form-control"
          id="disabledInput"
          type="text"
          placeholder="EDIT The Form To Update A Movie.."
          disabled
        />
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputName">Name</label>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              name="name"
              value={inputs.name}
              onChange={setInputs}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputRating">Rating</label>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              name="rating"
              value={inputs.rating}
              onChange={setInputs}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputImage">Image URL</label>
            <input
              ref={inputRef}
              type="text"
              className="form-control"
              name="imageURL"
              value={inputs.imageURL}
              onChange={setInputs}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="overviewTextarea">Overview</label>
            <textarea
              className="form-control"
              name="overview"
              rows="5"
              // value={this.state.overview}
              value={inputs.overview}
              onChange={setInputs}
            ></textarea>
          </div>
        </div>
        <input
          ref={inputRef}
          type="submit"
          className="btn btn-danger btn-block"
          value="Add Movie"
        />
      </form>
    </div>
  );
};

export default EditMovie;
