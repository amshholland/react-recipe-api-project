import "./App.css";

import {
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
            <nav className="navLinks">
              <div className="border">
                <Link className="navLink" to="/">  Home  </Link>
              </div>
              <div className="border">
                <Link className="navLink" to="/favorites">Favorite Recipes</Link>
              </div>
              <div className="border">
                <Link className="navLink" to="/login">Login</Link>
              </div>
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
