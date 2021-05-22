import { useEffect, useState } from "react";
import "./RecipesList.css";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
  query: string;
}



// In each form input (onchange => {setFinalQuery} + {filterQuery}) onclick => handleSubmit
// min: number;
// max: number;

// let var1 = `&cal=${min}-${max}`;

export function RecipesList({ query }: Props) {
  const [recipes, setRecipes] = useState<SearchResponse[]>([]);

  useEffect(() => {
    fetchAll(query).then((data) => {
      setRecipes(data);
    });
  }, [query]);

  return (
    <div className="RecipesList">
      <div>
        <h2>{query} Recipes</h2>
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
