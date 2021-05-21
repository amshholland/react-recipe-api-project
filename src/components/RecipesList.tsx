import { useEffect, useState } from "react";
import "./RecipesList.css";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
  query: string;
  query2: string;
}
export function RecipesList({ query }: Props, {query2}: Props) {
  const [recipes, setRecipes] = useState<SearchResponse[]>([]);

  useEffect(() => {
    fetchAll(query, query2).then((data) => {
      setRecipes(data);
    });
  }, [query, query2]);

  return (
    <div className="RecipesList">
      <div>
        <h2>{query} Recipes</h2>
        <button>Filter</button>
      </div>
      {recipes.map((recipe) => (
        <div className="Recipe">
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
