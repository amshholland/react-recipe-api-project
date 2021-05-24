import './Recipe.css';

import { AppModal, VerticallyCenteredModal } from './Modal';
import { Button, Modal } from 'react-bootstrap';
import { FormEvent, useContext, useState } from 'react';

import { Favorite } from '../model/model';
import { FavoriteContext } from '../Context/favorite-context';
import { SearchResponse } from '../model/model';

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {
    const { addFavorites, deleteFavorites } = useContext( FavoriteContext );
    const ingredients = recipe.ingredientLines;

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


    const toggleTrueFalse = () => setToggled( !isToggled );

    console.log( isToggled );

    return (
        <form className="Recipe" onSubmit={ handleSubmit } >
            <Modal { ...recipe } size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>{ recipe.label } FROM { recipe.source }</h3>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <div className="recipeImage" style={ { backgroundImage: `url(${ recipe.image })` } }> */ }
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
                            <p>Calories: { recipe.calories }</p>
                            <p>Time to Prepare: { recipe.totalTime }</p>
                            <p>Dish Type: { recipe.mealType }</p>

                            <p>
                                <a href={ recipe.url }>Full Recipe</a>
                            </p>
                        </div>
                    </div >
                    {/* </div> */ }

                    <button onClick={ toggleTrueFalse } />
                </Modal.Body >
            </Modal>
        </form >
    );
}

export default Recipe;
