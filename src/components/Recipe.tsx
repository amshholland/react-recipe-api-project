import './Recipe.css';

import { Router } from 'react-router';
import { SearchResponse } from "../model/model";
import { useState } from 'react';

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {

    const ingredients = recipe.ingredientLines;
    console.log( ingredients );

    return (
        <div className="Recipe">
            <div>
                <div className="label">
                    <h3>{ recipe.label } BY { recipe.source }</h3>
                </div>
                <div className="details">
                    <div>
                        <img src={ recipe.image } alt={ recipe.label } />
                    </div>
                    <div className="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            { ingredients.map( ( item ) => <li>{ item }</li> ) }
                        </ul>
                    </div>

                    <p>Calories: { recipe.calories }</p>
                    <p>Time to Prepare: { recipe.totalTime }</p>
                    <p>Dish Type: { recipe.mealType }</p>


                    <p><a href={ recipe.url }>Link</a></p>
                </div >
            </div>
        </div>

    );
}

export default Recipe;