import "./App.css";

import { Header } from "./components/Header";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="components">
        <Header />
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
