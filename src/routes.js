import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/notfound";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="home" component={Home} />
        <Route exact path="about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
