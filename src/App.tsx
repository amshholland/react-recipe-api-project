import "./App.css";

import { Header } from "./components/Header";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <SearchForm />
    </div>
  );
}

export default App;
