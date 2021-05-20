import "./App.css";

import React from "react";
import { RecipesList } from "./components/RecipesList";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header>
        Logo
      </header>
      <SearchForm />
    </div>
  );
}

export default App;
