import React, { useEffect, useState } from "react";

import Recipe from "./Recipe";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
    query: string;
}

export function RecipesList( { query }: Props ) {

    const [ recipes, setRecipes ] = useState<SearchResponse[]>( [] );

    useEffect( () => {
        fetchAll( query ).then( data => {
            setRecipes( data);
        } );
    }, [ query ] );

    return (
        <div className="RecipesList">
            {/* Just to make sure it's working */ }
            <h2>Recipes to search: { query }</h2>
           
            {/* {recipes.map( recipe =>
                <Recipe key={ recipe.label } />
            ) } */}
        </div>
    );
}
