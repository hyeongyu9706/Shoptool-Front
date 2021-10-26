import React, { Component } from "react";
import RouterWrapper from "./Router/index.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component{
  render() {
    return (
      <Router>
        <Route
          path="/" component={RouterWrapper}/>
      </Router>
    )
  }
}

export default App;
