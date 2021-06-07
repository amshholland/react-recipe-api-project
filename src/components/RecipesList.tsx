import "./Recipe.css";
import './RecipesList.css';

import { Button, Modal } from "react-bootstrap";
import React, { FormEvent, useContext, useEffect, useState } from "react";

import { Favorite } from "../model/model";
import { FavoriteContext } from "../Context/favorite-context";
import Recipe from "./Recipe";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
  query: string;
}

export function RecipesList( { query }: Props ) {
  const [ recipes, setRecipes ] = useState<SearchResponse[]>( [] );
  const [ calories, setCalories ] = useState( "" );
  const [ submittedCalories, setSubmittedCalories ] = useState( 0 );
  const [ time, setTime ] = useState( "" );
  const [ submittedTime, setSubmittedTime ] = useState( 0 );
  const [ title, setTitle ] = useState( "" );
  const [ submittedTitle, setSubmittedTitle ] = useState( "" );

  const { addFavorites, favorites } = useContext( FavoriteContext );
  const [ label, setLabel ] = useState( "" );
  const [ image, setImage ] = useState( "" );
  const [ url, setUrl ] = useState( "" );
  const [ healthLabels, sethealthLabels ] = useState( [] );
  const [ dietLabels, setdietLabels ] = useState( [] );
  const [ ingredientLines, setingredientLines ] = useState( [] );
  const [ totalTime, settotalTime ] = useState( "" );
  const [ mealType, setmealType ] = useState( "" );
  const [ ingredients, setIngredients ] = useState( [] );
  const [ source, setsource ] = useState( "" );
  const [ favored, setfavored ] = useState( false );
  const [ filterButton, setFilterButton ] = useState( false );
  const [ showFilter, setShowFilter ] = useState( false );

  const handleCloseFilter = () => setShowFilter( false );
  const handleShowFilter = () => setShowFilter( true );

  const handleCloseRecipe = () => setSelectedRecipe( null );

  const [ selectedRecipe, setSelectedRecipe ] =
    useState<SearchResponse | null>( null );

  function handleClickRecipe( recipe: SearchResponse ): void {
    setSelectedRecipe( recipe );
  }

  useEffect( () => {
    fetchAll( query ).then( ( data ) => {
      setRecipes( data );
    } );
  }, [ query ] );

  function handleSubmit( e: FormEvent ): void {
    e.preventDefault();
    setSubmittedCalories( parseInt( calories ) );
    setSubmittedTime( parseInt( time ) );
    setSubmittedTitle( title );
  }

  function capitalizeFirstLetter( letter: string ) {
    return letter.charAt( 0 ).toUpperCase() + letter.slice( 1 );
  }

  function addBookmark( e: FormEvent ) {
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

    };
    addFavorites( favorite );
  }

  return (
    <div className="RecipesList">
      <div>
        <button className="button" onClick={ handleShowFilter } >
          Filter
        </button>

        <Modal show={ showFilter } onHide={ handleCloseFilter } animation={ false } className="myFilterModal" overlayClassName="myoverlay" closeTimeoutMS={ 500 }>
          <div className="modal-header" id="modal-header">
            <button type="button" className="close" data-dismiss="modal" onClick={ handleCloseFilter }> × </button><br /><br />
            <h3 className="modal-title" id="modal-title">Filter</h3>
          </div>

          <Modal.Body>
            <form onSubmit={ handleSubmit }>
              <label>
                <br />Calories:
                <input type="text" value={ calories } onChange={ ( e ) => setCalories( e.target.value ) } />
              </label><br />
              <label>
                <br /> Time to Cook:
                <input type="text" value={ time } onChange={ ( e ) => setTime( e.target.value ) } />
              </label>
              <br />
              <label><br /> Health Labels: <br /> (Vegan, Vegetarian, Egg-Free, etc.):
                <input type="text" value={ title } onChange={ ( e ) => setTitle( e.target.value ) } />
              </label>
              <br />
              <button className="button" type="submit">Apply</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>

      {recipes.map( ( recipe ) => (
        <div key={ recipe.label } className="RecipeCard">

          { parseInt( recipe.calories ) <= submittedCalories ||
            parseInt( recipe.totalTime ) <= submittedTime ||
            recipe.healthLabels.includes(
              capitalizeFirstLetter( submittedTitle )
            ) ? (
            <>
              <div className="cardDetails">
                <div>
                  <h2>{ recipe.label }</h2>
                </div>

                <div>
                  <h4>Calories:</h4>
                  { parseInt( recipe.calories ).toFixed( 0 ) }<br />
                </div>

                <div>
                  <h4>Number of Ingredients:</h4> { recipe.ingredients.length }<br />
                </div>

                <div>
                  <h4>Health Labels:</h4> { recipe.dietLabels }<br />
                </div>
              </div>

              <div className="imageDiv">
                <img src={ recipe.image } alt={ recipe.label } /><br />
              </div>
              <button onClick={ () => handleClickRecipe( recipe ) } >More Details</button>
            </>
          ) : (
            query || (
              <>
                <div className="details">
                  <h3>{ recipe.label }</h3>
                  <div className="otherDetails">
                    <h4>Calories:</h4>
                    { parseInt( recipe.calories ).toFixed( 0 ) }<br />

                    <h4>Time to Prepare:</h4> { recipe.totalTime }<br />

                    <h4>Dish Type:</h4> { recipe.mealType }<br />
                  </div>

                  <div className="imageDiv">
                    <img src={ recipe.image } alt={ recipe.label } />
                  </div>
                </div>
              </>
            ) ) }
        </div>
      ) )
      }
      <Modal show={ selectedRecipe !== null } className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={ 500 }>
        { selectedRecipe !== null &&
          <Recipe recipe={ selectedRecipe } onClose={ handleCloseRecipe } />
        }
      </Modal>


    </div >
  );
}

