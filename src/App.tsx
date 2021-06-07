import "./App.css";

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { FavoriteContextProvider } from "./Context/favorite-context";
import FavoriteRoute from "./components/FavoriteRoute";
import { Footer } from "./components/Footer";
import LoginForm from "./components/LoginForm";
import { Logo } from "./components/Logo";
import NavLinks from "./components/NavLinks";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="components">
        <Router>
          <FavoriteContextProvider>
            <NavLinks />
            <Logo />
            <Switch>
              <Route path="/login" exact>
                <LoginForm />
              </Route>
              <Route path="/favorites" exact>
                <FavoriteRoute />
              </Route>
            </Switch>
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