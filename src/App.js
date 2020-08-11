import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CategoryPreview from "./components/CategoryPreview";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <CategoryPreview media="movie" category="trending" />
          <CategoryPreview media="tv" category="trending" />

          <CategoryPreview media="movie" category="popular" />
          <CategoryPreview media="movie" category="top_rated" />
          <CategoryPreview media="movie" category="upcoming" />
          <CategoryPreview media="movie" category="now_playing" />

          <CategoryPreview media="tv" category="popular" />
          <CategoryPreview media="tv" category="top_rated" />
          <CategoryPreview media="tv" category="on_the_air" />
        </Route>
        <Route exact path="/:media/:category/page/:page">
          <Category />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
