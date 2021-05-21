import { FormEvent, useState } from "react";
import { RecipesList } from "./RecipesList";

export function SearchForm() {
  const [query2, setQuery2] = useState("");
  const [submittedQuery2, setSubmittedQuery2] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmittedQuery2(query2);
  }

  return (
    <div>
      <form className="Filter" onSubmit={handleSubmit}>
        <label>
          Search For Recipes: <br />
          <input
            type="text"
            value={query2}
            onChange={(e) => setQuery2(e.target.value)}
          />
        </label>
        <button type="submit">Apply Filter</button>
      </form>
      <RecipesList query={submittedQuery2} />
    </div>
  );
}
