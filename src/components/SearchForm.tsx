import React, { FormEvent, useState } from "react";
import { RecipesList } from "./RecipesList";

export function SearchForm() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [submittedFilter, setSubmittedFilter] = useState("");


  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setSubmittedQuery(query);
  }

  function handleSubmit2(e: FormEvent): void {
    e.preventDefault();
    setSubmittedQuery(query);
    setSubmittedFilter(filter)
  }

  return (
    <div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label>
          Search For Recipes: <br />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit">Search Foods</button>
        <br />
      </form>
      <form className="Filter" onSubmit={handleSubmit2}>
      <label>
        Filter For Recipes: <br />
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <button type="submit">Filter Foods</button>
    </form>
      <RecipesList query={submittedQuery}  filter={submittedFilter}/>
    </div>
  );
}
