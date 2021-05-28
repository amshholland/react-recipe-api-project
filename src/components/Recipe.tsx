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
        <form onSubmit={ handleSubmit } >
            <div className="Recipe" >
                <Modal.Body>
                    <div className="modal-header" id="modal-header">
                        <button className="favorite" type="submit"> Add to Favorites </button>
                        <button type="button" className="close" data-dismiss="modal" onClick={ onClose }> × </button><br /><br /><br />
                        <h3 className="modal-title" id="modal-title">{ recipe.label }</h3>
                        <h3 className="bold">FROM</h3>
                        <h3 className="modal-title" id="modal-title">{ recipe.source }</h3><br />
                    </div>

                    <div>
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
                            <h4><a href={ recipe.url }>Full Recipe</a></h4>
                        </div>

                        <div className="otherDetails">
                            <h4>Calories:</h4> { parseInt( recipe.calories ) }<br /><br />
                            <h4>Time to Prepare:</h4> { parseInt( recipe.totalTime ) }<br /><br />
                            <h4>Dish Type:</h4> { recipe.mealType }<br /><br />
                        </div>
                    </div >

                </Modal.Body >
            </div>
        </form >
    );
}

export default Recipe;
