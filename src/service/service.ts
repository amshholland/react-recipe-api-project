import { RecipesResponse, SearchResponse } from "./../model/model";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";
const apiId: string = process.env.REACT_APP_RECIPE_API_ID || "";
export function fetchAll( query: string, query2: string ): Promise<SearchResponse[]> {
    return fetch(
        `https://api.edamam.com/search?q=${ query }&app_id=${ apiId }&app_key=${ apiKey }${query2}`
    )
        .then( ( res ) => res.json() )
        .then( ( data: RecipesResponse ) => {
            return data.hits.map( ( hit ) => hit.recipe );
        } );
}