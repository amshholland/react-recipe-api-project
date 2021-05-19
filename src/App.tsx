import "./App.css";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <header>
        <img src="../images/file.jpg" alt="pic" />
      </header>
      <SearchForm />
    </div>
  );
}

export default App;
