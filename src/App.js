import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Category from "./components/Category";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";
import Detail from "./pages/Detail";
import Person from "./pages/Person";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
        <Route exact path="/tv">
          <Tv />
        </Route>
        <Route exact path="/:media/:category/page/:page">
          <Category />
        </Route>
        <Route exact path="/:media/:category/:searchParam/page/:page">
          <Category />
        </Route>
        <Route path="/person/:id">
          <Person />
        </Route>
        <Route path="/:media/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
