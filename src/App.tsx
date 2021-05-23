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
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <FavoriteContextProvider>
          <h1>API Group Project</h1>
          <nav>
            <Link to="/favorites">See Saved Recipes</Link>{ " " }
          </nav>
          <Switch>
            <Route path="/" exact>
              <SearchForm />
            </Route>
            <Route path="/favorites/:num" exact>
              <FavoredView />
            </Route>
            <Route>
              <FavoriteRoute />
            </Route>
          </Switch>
        </FavoriteContextProvider>
      </Router>
    </div>
  );
}
//     <div className="App">
//       <header>
//         Logo
//       </header>
//       <SearchForm />
//  <FavoriteContextProvider>
//  <FavoriteRoute />
//  </FavoriteContextProvider>
//     </div>


export default App;
