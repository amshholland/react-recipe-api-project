import { FormEvent, useState } from "react";

export function Filter() {
  const [filter, setFilter] = useState("");
  const [submittedFilter, setSubmittedFilter] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmittedFilter(filter);
  }

  return (
    <form className="Filter" onSubmit={handleSubmit}>
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
  );
}
