import React, { useState, useEffect, useMemo, useCallback } from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState(0);
  const [searchQuery, setSearchQuery] = useState(0);

  // class App extends React.Component {
  //   state = {
  //     movies: [],
  //     searchQuery: "",
  //   };

  useEffect(() => {
    getMovies();
  }, []);

  // async componentDidMount() {
  //   this.getMovies();
  // }

  //---

  const getMovies = async () => {
    response = await axios.get("http://localhost:3002/movies");
    // this.setState({ movies: response.data });
    setMovies = response.data;
  };

  const deleteMovie = useCallback(async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = movies.filter((m) => m.id !== movie.id);
    setMovies = newMovieList;
  }, []);

  const searchMovie = useCallback((event) => {
    setSearchQuery = event.target.value;
  }, []);

  const addMovie = useCallback(async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie);

    (setMovies = state.movies.concat([movie])), getMovies();
  }, []);

  const editMovie = useCallback(async (movie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
    getMovies();
  }, []);

  let filteredMovies = useMemo(
    () =>
      setMovies.filter((movie) => {
        return (
          movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        );
      }),
    [searchQuery]
  ).sort((a, b) => {
    return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <SearchBar searchMovieProp={searchMovie(event.target.value)} />
        </div>
        <Router />

        <div className="container">
          {/* <Switch> */}
          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={searchMovie} />
                  </div>
                </div>

                <MovieList
                  movies={filteredMovies}
                  deleteMovieProp={deleteMovie}
                />
              </React.Fragment>
            )}
          ></Route>
          <Route
            path="/add"
            render={(history) => (
              <AddMovie
                onAddMovie={(movie) => {
                  addMovie(movie);
                  history.push("/");
                }}
              />
            )}
          ></Route>
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditMovie
                {...props}
                onEditMovie={(id, movie) => {
                  editMovie(id, movie);
                }}
              />
            )}
          ></Route>

          <Route path="/edit/:id" Component={EditMovie} />

          {/* </Switch> */}
        </div>
      </div>
      <Router />
    </div>
  );
};
export default App;
