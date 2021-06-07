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
import { Footer } from "./components/Footer";
import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { Logo } from "./components/Logo";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="components">
        <Router>
          <FavoriteContextProvider>
            <header>
              <nav className="navLinks">
                <Logo />
                <div>
                <Link className="navLink" to="/favorites">Favorite Recipes</Link>
                <Link className="navLink" to="/login">Login</Link>
                </div>
              </nav>

              <Switch>
                {/* <Route path="/favorites/:num" exact>
                  <FavoredView />
                </Route> */}
                <Route path="/login" exact>
                  <LoginForm />
                </Route>
                <Route path="/favorites" exact>
                  <FavoriteRoute />
                </Route>
              </Switch>
            </header>


            <Route path="/" exact>
              <SearchForm />
            </Route>

          </FavoriteContextProvider>
        </Router>
        <Footer />
      </div>
    </div>
  );
}



export default App;
