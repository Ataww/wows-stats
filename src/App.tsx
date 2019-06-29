import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Search from "./Search";
import Season from "./Season";

// 501235211
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
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
