import { useState, FormEvent } from "react";

export function SearchForm() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setKeyword("");
  }
  return (
      <form className="SearchForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />{" "}
          Recipe Keyword
        </label>
        <button type="submit">Search Foods</button>
      </form>
  );
}
export default SearchForm;
