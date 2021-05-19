import { Search } from './../model/model';

const apiKey: string = process.env.REACT_APP_RECIPE_API_KEY || "";
const apiId: string = process.env.REACT_APP_RECIPE_API_APP_ID || "";
const credentials = btoa( apiKey );

export function fetchRecipes( keyword: string ): Promise<Search> {
    return fetch( `https://api.edamam.com/search?q=${ keyword }&app_id=${ apiId }&app_key=${ apiKey }`, {
        headers: {
            Authorization: `Basic ${ credentials }`
        }
    } )
        .then( res => res.json() )
        .then( ( data ) => {
            return data;
        } );
}