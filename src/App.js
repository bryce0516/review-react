import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./components/Main";
import Count from "./components/Count"
import UnableBatch from "./components/UnableBatch"
import MultipleState from "./components/MultipleState";
import UseEffect1 from "./components/UseEffect1";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
            <li>
              <Link to="/unablebatch">Unablebatch</Link>
            </li>
            <li>
              <Link to="/multiple">multiplestate</Link>
            </li>
            <li>
              <Link to="/useeffect1">useeffect1</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/count">
            <Count />
          </Route>
          <Route path="/unablebatch">
            <UnableBatch />
          </Route>
          <Route path="/multiple">
            <MultipleState />
          </Route>
          <Route path="/useeffect1">
            <UseEffect1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}