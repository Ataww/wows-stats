import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Profile from "./Profile";
import Search from "./Search";

// 501235211
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ranked stuffy stuff
          </p>
          <Link to="/" className="App-link">
            Main
          </Link>
        </header>
        <Route exact path="/" component={Search} />
        <Route
          path="/profile/:id"
          render={({ match }) => <Profile id={match.params.id} />}
        />
        <Route
          path="/profile/:id/stats/:season"
          render={({ match }) => <div>Test</div>}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
