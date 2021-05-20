import { SearchResponse } from "../model/model";

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {
    return (
        <div className="Recipe">
            <h3>Recipe</h3>
            <p>Label: { recipe.label }</p>
            <p>Calories: { recipe.calories }</p>
            <p>Time to Prepare: { recipe.totalTime }</p>
            <p>Dish Type: { recipe.mealType }</p>
            <img src={recipe.image} alt={recipe.label}/>
            <p><a href={ recipe.url }>Link</a></p>
        </div>
    );
}

export default Recipe;