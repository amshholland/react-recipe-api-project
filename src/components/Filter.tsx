import { FormEvent, useState } from "react";
import { healthLabels } from "./../model/filter-examples";

export function Filter() {
  const [query2, setQuery2] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setQuery2(query2);
  }

  return (
    <form className="Filter" onSubmit={handleSubmit}>
        Search For Recipes: <br />
        <input
          type="checkbox"
          value={healthLabels[0].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Vegan
        <input
          type="checkbox"
          value={healthLabels[1].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Vegetarian
        <input
          type="checkbox"
          value={healthLabels[2].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Sugar-Conscious
        <input
          type="checkbox"
          value={healthLabels[3].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Peanut Free
        <input
          type="checkbox"
          value={healthLabels[4].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Tree-Nut Free
        <input
          type="checkbox"
          value={healthLabels[5].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Alcohol Free
        <input
          type="checkbox"
          value={healthLabels[6].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Egg Free
        <input
          type="checkbox"
          value={healthLabels[7].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Soy Free
        <input
          type="checkbox"
          value={healthLabels[8].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Fish Free
        <input
          type="checkbox"
          value={healthLabels[9].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Shellfish Free
        <input
          type="checkbox"
          value={healthLabels[10].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Pork Free
        <input
          type="checkbox"
          value={healthLabels[11].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Red-Meat Free
        <input
          type="checkbox"
          value={healthLabels[12].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Celery Free
        <input
          type="checkbox"
          value={healthLabels[13].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Mustard Free
        <input
          type="checkbox"
          value={healthLabels[14].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Sesame Free
        <input
          type="checkbox"
          value={healthLabels[15].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Lupine Free
        <input
          type="checkbox"
          value={healthLabels[16].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Mollusk Free
        <input
          type="checkbox"
          value={healthLabels[17].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Kosher
        <input
          type="checkbox"
          value={healthLabels[18].value}
          onChange={(e) => setQuery2(e.target.value)}
        />Immuno-Supportive
      <button type="submit">Filter Foods</button>
    </form>
  );
}
