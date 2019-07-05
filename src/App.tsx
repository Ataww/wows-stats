import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Season from "./pages/Season";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <p>Ranked stuffy stuff</p>
          <Link to="/" className="App-link">
            Home
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route
              exact
              path="/profile/:id"
              render={({ match }) => <Profile id={match.params.id} />}
            />
            <Route
              path="/profile/:id/season/:season"
              render={({ match }) => (
                <Season id={match.params.id} seasonId={match.params.season} />
              )}
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
