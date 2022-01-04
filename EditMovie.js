import React, {useEffect, useState} from "react";
import axios from "axios";
import { useState } from "react";

const EditMovie =() => {
 const [name,setName]=useState(0)
 const [rating,setRating]=useState(0)
 const [overview,setOverview]=useState(0)
 const [imageURL,setÝmageURL]=useState(0)

 const [state,setState]=useState(0)
 const [count,setCount]=useState(0)

//   useEffect(()=>{
//      const id = this.props.match.params.id;
//     const response = await axios.get(`http://localhost:3002/movies/${id}`);
//     const movie = response.data;
//      this.setState({
//       name: movie.name,
//       rating: movie.rating,
//       overview: movie.overview,
//       imageURL: movie.imageURL,
//   }); 
// [name,rating,overview,imageURL]
  
useEffect(()=>{
  id = this.props.match.params.id;
      load();
      setCount({
          name: movie.name,
          rating: movie.rating,
          overview: movie.overview,
          imageURL: movie.imageURL,
},[name,rating,overview,imageURL])
  // useEffect(()=>{
  //    id = this.props.match.params.id;
  //    load();
    

  //     this.count({
  //     name: movie.name,
  //     rating: movie.rating,
  //     overview: movie.overview,
  //    imageURL: movie.imageURL,
  //  })[name,rating,overview,imageURL,]})
  //   }
const load=()=>{
  response = await axios.get(`http://localhost:3002/movies/${id}`);
  movie = response.data;
}

  const onInputChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

    const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, rating, overview, imageURL } = this.state;
    const id = this.props.match.params.id;
    const updatedMovie = {
      name: name,
      rating: rating,
      overview: overview,
      imageURL: imageURL,
    };
    props.onEditMovie(id, updatedMovie);
    props.history("/");
  };

 
    return (
      <div className="container">
        <form className="mt-5" onSubmit={handleFormSubmit}>
          <input
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
                type="text"
                className="form-control"
                name="name"
                value={setCount}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={setCount}
                onChange={onInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={setCount}
                onChange={onInputChange}
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
                value={setCount}
                onChange={onInputChange}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Add Movie"
          />
        </form>
      </div>
    );
    
}

export default EditMovie;