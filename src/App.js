import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CategoryPreview from "./components/CategoryPreview";
import Category from "./components/Category";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Tv from "./pages/Tv";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
