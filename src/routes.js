import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "./pages/about";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="about" component={About} />
      </Switch>
    );
  }
}

export default Routes;
