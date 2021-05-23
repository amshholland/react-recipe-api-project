import './Recipe.css';

import { SearchResponse } from "../model/model";

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {

    const ingredients = recipe.ingredientLines;

    return (
        <div className="Recipe" >
            <div className="label">
                <h3>{ recipe.label } FROM { recipe.source }</h3>
            </div>
            <div className="recipeImage" style={ { backgroundImage: `url(${ recipe.image })` } }>
                <div className="details">
                    {/* <div className="imageDiv">
                        <img src={ recipe.image } alt={ recipe.label } />
                    </div> */}

                    <div className="ingredients">
                        <h4> Ingredients</h4>
                        <ul>
                            { ingredients.map( ( item ) => <li>{ item }</li> ) }
                        </ul>
                    </div>

                    <div className="otherDetails">
                        <p>Calories: { recipe.calories }</p>
                        <p>Time to Prepare: { recipe.totalTime }</p>
                        <p>Dish Type: { recipe.mealType }</p>
                        <p><a href={ recipe.url }>Full Recipe</a></p>
                    </div>
                </div >
            </div>
        </div >

    );
}

export default Recipe;