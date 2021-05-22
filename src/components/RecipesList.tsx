import { useEffect, useState } from "react";

import Recipe from "./Recipe";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
    query: string;
}
export function RecipesList( { query }: Props ) {
    const [ recipes, setRecipes ] = useState<SearchResponse[]>( [] );
    useEffect( () => {
        fetchAll( query ).then( ( data ) => {
            setRecipes( data );
        } );
    }, [ query ] );
    return (
        <div className="RecipesList">
            {recipes.map( ( recipe ) => (
                <Recipe key={ recipe.label } recipe={ recipe } />
            ) ) }
        </div>
    );
}