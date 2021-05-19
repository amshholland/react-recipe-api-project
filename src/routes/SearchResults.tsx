import { useEffect, useState } from "react";
import { Recipe } from "../model/model";
import { fetchRecipes } from "../service/service";

interface Props {
  results: Recipe[];
}

export function SearchResults({ results }: Props) {
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes(results).then((data) => {
      setSearchResults(data);
    });
  }, [{ results }]);

  return (
    <div>
      {results.map((result, i) => (
        <li key={i}>
          <p>{result.label}</p>
          <p>{result.image}</p>
          <p>{result.url}</p>
          <p>{result.calories}</p>
          <p>{result.time}</p>
        </li>
      ))}
    </div>
  );
}

export default SearchResults