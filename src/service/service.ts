import { RecipesResponse, SearchResponse } from "./../model/model";
import { healthLabels } from "./../model/filter-examples";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";
const apiId: string = process.env.REACT_APP_RECIPE_API_ID || "";

export function fetchAll(query: string): Promise<SearchResponse[]> {
  return fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}${healthLabels[6].value}`
  )
    .then((res) => res.json())
    .then((data: RecipesResponse) => {
      return data.hits.map((hit) => hit.recipe);
    });
}
