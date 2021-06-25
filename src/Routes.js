import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home_Countries';
import Cases_Country from './components/Country_Cases';

export default function Routes() {
    return (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/CountryCases/:name" component={Cases_Country} />
  </Router>
);
}
