import "./App.css";

import { Background } from "./components/Background";
import { Header } from "./components/Header";
import React from "react";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Background />
      <header>
        <Header />
      </header>
      {/* <SearchForm /> */ }

    </div>
  );
}

export default App;
