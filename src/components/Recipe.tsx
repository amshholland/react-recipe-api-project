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
    const history = useHistory();
    const [ isToggled, setToggled ] = useState( false );

    const [ label, setLabel ] = useState( '' );
    const [ image, setImage ] = useState( '' );
    const [ url, setUrl ] = useState( '' );
    const [ healthLabels, sethealthLabels ] = useState( [] );
    const [ dietLabels, setdietLabels ] = useState( [] );
    const [ ingredientLines, setingredientLines ] = useState( [] );
    const [ calories, setcalories ] = useState( '' );
    const [ totalTime, settotalTime ] = useState( '' );
    const [ mealType, setmealType ] = useState( '' );
    const [ source, setsource ] = useState( '' );
    const [ favored, setfavored ] = useState( false );

    function handleSubmit( e: FormEvent ) {
        e.preventDefault();

        const favorite: Favorite = {
            label: label,
            image: image,
            url: url,
            healthLabels: healthLabels,
            dietLabels: dietLabels,
            ingredientLines: ingredientLines,
            ingredients: ingredients,
            calories: calories,
            totalTime: totalTime,
            mealType: mealType,
            source: source,
            favored: favored,
        };
        addFavorites( recipe );
    }
    // if (isToggled===true){
    //   addFavorites(recipe);
    // } else {
    //   deleteFavorites(recipe);
    // }
    // }

    function onShutDown() {
        history.push( "/" );
    }
    const toggleTrueFalse = () => setToggled( !isToggled );

    return (
        <form onSubmit={ handleSubmit } >
            <div className="Recipe" >
                <Modal.Body>
                    <label className="closeButton" onClick={ onShutDown }><i className="material-icons">close</i></label>


                    <div className="details">
                        <div>
                            <img src={ recipe.image } alt={ recipe.label } />
                        </div>
                        <div className="ingredients">
                            <h4>Ingredients</h4>
                            <ul>
                                { ingredients.map( ( item ) => (
                                    <li>{ item }</li>
                                ) ) }
                            </ul>
                        </div>

                        <div className="otherDetails">
                            <strong>Calories:</strong> { parseInt( recipe.calories ) }
                            <strong>Time to Prepare:</strong> { parseInt( recipe.totalTime ) }
                            <strong>Dish Type:</strong> { recipe.mealType }
                        </div>
                    </div >

                    <button onClick={ toggleTrueFalse }> Bookmark </button>
                </Modal.Body >
            </div>
        </form >
    );
}

export default Recipe;
