import { useEffect, useState } from "react";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
  query: string;
  filter: string;
}

export function RecipesList({ query }: Props, { filter }: Props) {
  const [recipes, setRecipes] = useState<SearchResponse[]>([]);
  const [currentQuery, setCurrentQuery ] = useState("");

  useEffect(() => {
    fetchAll(query).then((data) => {
      setCurrentQuery(query);
      setRecipes(data);
    });
  }, [query]);

  return (
    <div className="RecipesList">
      <div>
        <h2>{query} Recipes</h2>
      </div>
      {recipes.map((recipe) => (
        <div key={recipe.label} className="Recipe">
          <div className="Info">
            <h3>{recipe.label}</h3>
            <p>
              <strong>Calories:</strong> {recipe.calories}
            </p>
            <p>
              <strong>Time to Prepare:</strong> {recipe.totalTime}
            </p>
            <p>
              <strong>Dish Type:</strong> {recipe.mealType}
            </p>
          </div>
          <img src={recipe.image} alt={recipe.label} />
        </div>
      ))}
    </div>
  );
}
