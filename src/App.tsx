import "./App.css";

import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import FavoredView from "./components/FavoredRoute";
import { Favorite } from "./model/model";
import { FavoriteContextProvider } from "./Context/favorite-context";
import FavoriteRoute from "./components/FavoriteRoute";
import FavoriteView from "./components/FavoriteView";
import { Header } from "./components/Header";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="components">
        <Header />
        <Router>
          <FavoriteContextProvider>
            <nav>
              <Link to="/">Home</Link>{ " " }
              <Link to="/favorites">See Saved Recipes</Link>{ " " }
              <Link to="/login">Login</Link>{ " " }
            </nav>
            <Switch>
              <Route path="/" exact>
                <SearchForm />
              </Route>
              <Route path="/favorites/:num" exact>
                <FavoredView />
              </Route>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Route>
                <FavoriteRoute />
              </Route>
            </Switch>
          </FavoriteContextProvider>
        </Router>
      </div>
    </div>
  );
}



export default App;
