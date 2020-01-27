import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import { Route, Switch, Link } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Link to="/">List</Link>
      <Link to="/movies/1">Movie</Link>
      <Link to="/saved-list">Saved</Link>

      <Switch>
        <Route path="/saved-list">
          <SavedList list={SavedList} />
        </Route>

        <Route exact path="/">
          <MovieList />
        </Route>

        <Route path="/movies/1">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
