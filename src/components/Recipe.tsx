import { SearchResponse } from "../model/model";

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {
    return (
        <div className="Recipe">
            <h3>Recipe</h3>
            <p>Label: { recipe.label }</p>
            <p><a href={ recipe.url }>Link</a></p>
        </div>
    );
}

export default Recipe;