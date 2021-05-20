import { useEffect, useState } from "react";

import { Recipe } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
    query: string;
}

function RecipesList( { query }: Props ) {

    const [ recipes, setRecipes ] = useState<Recipe[]>( [] );

    useEffect( () => {
        fetchAll( query ).then( data => {
            setRecipes( data );
        } );
    }, [ query ] );

    return (
        <div className="RecipesList">
            <h2>Recipes</h2>
            {recipes.map( =>)  }
        </div>
    );
}
