import './Recipe.css';

import { AppModal, VerticallyCenteredModal } from './Modal';
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

import { SearchResponse } from "../model/model";

interface Props {
    recipe: SearchResponse;
}

function Recipe( { recipe }: Props ) {

    const ingredients = recipe.ingredientLines;

    return (
        <div className="Recipe" >
            <Modal { ...recipe } size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h3>{ recipe.label } FROM { recipe.source }</h3>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <div className="recipeImage" style={ { backgroundImage: `url(${ recipe.image })` } }> */ }
                    <div className="details">
                        {/* <div className="imageDiv">
                        <img src={ recipe.image } alt={ recipe.label } /></div> */}

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
                    {/* </div> */ }
                </Modal.Body>

            </Modal>
        </div>

    );
}

export default Recipe;