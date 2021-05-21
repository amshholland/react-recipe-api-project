import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
import { SearchForm } from "./components/SearchForm";
import FavoriteView from "./components/FavoriteView"
import {FavoriteContextProvider} from "./Context/favorite-context";
import FavoredView from "./components/FavoredRoute"
import {Favorite} from "./model/model"

import FavoriteRoute from "./components/FavoriteRoute"
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

function App() {
  return (
<div className="App">
<Router>  
      <FavoriteContextProvider>
       
          <h1>API Group Project</h1>
          <nav>
            <Link to="/favorites">See Saved Recipes</Link>{" "}
            <Link to="/">Home</Link>
          </nav>
          <Switch>
          <Route path="/" exact>
              <SearchForm />
            </Route>
            <Route path="/favorites/:num" exact>
              <FavoredView />
            </Route>
           <Route>
             <FavoriteRoute/>
           </Route>
        
          </Switch>
       
      </FavoriteContextProvider>
      </Router>
    </div>




//     <div className="App">
//       <header>
//         Logo
//       </header>
//       <SearchForm />
//  <FavoriteContextProvider>
//  <FavoriteRoute />
//  </FavoriteContextProvider>
//     </div>
  );
}

export default App;
