import React, { useState } from "react";
import SavedList from "./Movies/SavedList";
import { Route, Link, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>

        <Route path="/movies/:id">
          <Link>
          <Movie/>
          </Link>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
