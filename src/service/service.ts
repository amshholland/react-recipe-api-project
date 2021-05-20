import { RecipesResponse, SearchResponse } from "./../model/model";

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";
const apiId: string = process.env.REACT_APP_RECIPE_API_ID || "";

export function fetchAll( query: string ): Promise<SearchResponse[]> {
    return fetch(
        `https://api.edamam.com/search?q=${ query }&app_id=${ apiId }&app_key=${ apiKey }`
    ).then( ( res ) => res.json() )
        .then( ( data: RecipesResponse ) => {
            return data.recipes;
        } );
}

// export function fetchRecipes( keyword: string ): Promise<SearchResponse> {
//     return fetch(
//         `https://api.edamam.com/search?q=${ keyword }&app_id=${ apiId }&app_key=${ apiKey }`,
//         {
//             headers: {
//                 Authorization: `Basic ${ credentials }`,
//             },
//         }
//     )
//         .then( ( res ) => res.json() );
// }

// export function fetchComplete( keyword: string ): Promise<CompleteRecipe[]> {
//     return fetch(
//         `https://api.edamam.com/search?q=${ keyword }&app_id=${ apiId }&app_key=${ apiKey }`,
//         {
//             headers: {
//                 Authorization: `Basic ${ credentials }`,
//             },
//         }
//             .then( ( res ) => res.json() )
//             .then( ( data: SearchResponse ) => {
//                 return data.recipe;
//             } );
//     )
// }


