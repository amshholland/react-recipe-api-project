import './Recipe.css';

import { Button, Modal } from 'react-bootstrap';
import { FormEvent, useContext, useState } from 'react';

import { Favorite } from '../model/model';
import { FavoriteContext } from '../Context/favorite-context';
import { SearchResponse } from '../model/model';
import { useHistory } from "react-router";

interface Props {
    recipe: SearchResponse;
    onClose: () => void;
}

function Recipe( { recipe, onClose }: Props ) {
    const { addFavorites, deleteFavorites } = useContext( FavoriteContext );
    const ingredients = recipe.ingredientLines;

    function handleSubmit( e: FormEvent ) {
        addFavorites( recipe );
        onClose();
    }

    return (
        <div className="Recipe" >
            <>
                <form className="recipeForm" onSubmit={ handleSubmit } >
                    <button className="favorite" type="submit"> Add to Favorites </button>
                </form>
                <button type="button" className="close" data-dismiss="modal" onClick={ onClose }> × </button><br /><br /><br />

                <div>
                    <h3 className="modal-title" id="modal-title">{ recipe.label }</h3>
                    <h3 className="bold">FROM</h3>
                    <h3 className="modal-title" id="modal-title">{ recipe.source }</h3><br />
                </div>

                <div className="recipeImage">
                    <img src={ recipe.image } alt={ recipe.label } />
                </div>

                <div className="details">
                    <div className="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                            { ingredients.map( ( item ) => (
                                <li>{ item }</li>
                            ) ) }
                        </ul>
                        <br />
                        <button className="button"><a href={ recipe.url } className="link">Full Recipe</a></button>
                    </div>

                    <div className="otherDetails">
                        <h4>Calories:</h4> { parseInt( recipe.calories ) }<br /><br />
                        <h4>Time to Prepare:</h4> { parseInt( recipe.totalTime ) }<br /><br />
                        <h4>Dish Type:</h4> { recipe.mealType }<br /><br />
                    </div>
                </div >
            </>
        </div >
    );
}

export default Recipe;
