import React from "react";
import Routes from "./routes";
import Navigate from "./layout/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navigate />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
