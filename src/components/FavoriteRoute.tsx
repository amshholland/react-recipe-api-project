import "./Recipe.css";
import './RecipesList.css';

import React, { useContext, useState } from "react";

import { Favorite } from "../model/model";
import { FavoriteContext } from "../Context/favorite-context";
import { Modal } from "react-bootstrap";
import Recipe from "./Recipe";

function FavoriteList() {
  const [ selectedRecipe, setSelectedRecipe ] = useState<Favorite | null>( null );

  function handleClickRecipe( favorite: Favorite ): void {
    setSelectedRecipe( favorite );
  }

  const { favorites } = useContext( FavoriteContext );
  const handleCloseRecipe = () => setSelectedRecipe( null );

  return (
    <div className="SearchForm">
      <div className="RecipesList">
        { favorites.map( ( favorite ) => (
          <div key={ favorite.label } className="RecipeCard">

            <div className="cardDetails">
              <div>
                <h2>{ favorite.label }</h2>
              </div>

              <div>
                <h4>Calories:</h4>
                { parseInt( favorite.calories ).toFixed( 0 ) }<br />
              </div>

              <div>
                <h4>Number of Ingredients:</h4> { favorite.ingredients.length }<br />
              </div>

              <div>
                <h4>Health Labels:</h4> { favorite.dietLabels }<br />
              </div>
            </div>

            <div className="imageDiv">
              <img src={ favorite.image } alt={ favorite.label } /><br />
            </div>
            <button onClick={ () => handleClickRecipe( favorite ) } >More Details</button>
          </div>
        ) ) }

        <Modal show={ selectedRecipe !== null } className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={ 500 }>
          { selectedRecipe !== null &&
            <Recipe recipe={ selectedRecipe } onClose={ handleCloseRecipe } />
          }
        </Modal>
      </div>
    </div>
  );
}
export default FavoriteList;