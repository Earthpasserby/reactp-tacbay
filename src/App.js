import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fpage from "../src/components/Fpage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">
          Fpage
        </Link>
      </div>
      <Switch>
        <Route path="/" exact>
          <Fpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
