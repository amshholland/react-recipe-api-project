import "./Recipe.css";

import { Button, Modal } from "react-bootstrap";
import React, { FormEvent, useContext, useEffect, useState } from "react";

import { Favorite } from "../model/model";
import { FavoriteContext } from '../Context/favorite-context';
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
  const [ label, setLabel ] = useState( '' );
  const [ image, setImage ] = useState( '' );
  const [ url, setUrl ] = useState( '' );
  const [ healthLabels, sethealthLabels ] = useState( [] );
  const [ dietLabels, setdietLabels ] = useState( [] );
  const [ ingredientLines, setingredientLines ] = useState( [] );
  const [ totalTime, settotalTime ] = useState( '' );
  const [ mealType, setmealType ] = useState( '' );
  const [ ingredients, setIngredients ] = useState( [] );
  const [ source, setsource ] = useState( '' );
  const [ favored, setfavored ] = useState( false );
  //Modal
  const [ modalState, setModalState ] = useState<"filterModal" | "recipeModal" | "close">( "close" );

  const handleShowFilterModal = () => {
    setModalState( "filterModal" );
  };

  const handleShowRecipeModal = () => {
    setModalState( "recipeModal" );
  };

  const handleClose = () => {
    setModalState( "close" );
  };

  useEffect( () => {
    fetchAll( query ).then( ( data ) => {
      setRecipes( data );
    } );
  }, [ query ] );

  function handleSubmit( e: FormEvent ): void {
    e.preventDefault();
    setModalState( "close" );
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
      favored: favored,
    };
    addFavorites( favorite );

  }

  return (
    <div className="RecipesList">

      <>
        <button className="button" onClick={ handleShowFilterModal }>Filter</button>{/* button to open filter modal */ }

        <Modal show={ modalState === "filterModal" } animation={ false }>
          <Modal.Header onHide={ handleClose } >
            <Modal.Title>Filter Recipes:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={ handleSubmit }>
              <label><br />Calories:{ " " }
                <input type="text" value={ calories } onChange={ ( e ) => setCalories( e.target.value ) } />
              </label><br />
              <label> <br /> Time to Cook:{ " " }
                <input type="text" value={ time } onChange={ ( e ) => setTime( e.target.value ) } />
              </label>
              <br />
              <label><br /> Health Labels:
                <br /> (Vegan, Vegetarian, Egg-Free, etc.):{ " " }
                <input type="text" value={ title } onChange={ ( e ) => setTitle( e.target.value ) } />
              </label>
              <br />
              <button type="submit" >Filter Results</button>
            </form>
          </Modal.Body>
        </Modal>
      </>

      { recipes.map( ( recipe ) => (
        <div key={ recipe.label } className="Recipe">
          {parseInt( recipe.calories ) >= submittedCalories ||
            parseInt( recipe.totalTime ) >= submittedTime ||
            recipe.healthLabels.includes(
              capitalizeFirstLetter( submittedTitle )
            ) || (
              <>
                <div className="details">
                  <div className="otherDetails">
                    <h3>{ recipe.label } <h3 className="bold">FROM</h3>{ recipe.source }</h3>
                    <p>
                      <strong>Calories:</strong> { recipe.calories }
                    </p>
                    <p>
                      <strong>Time to Prepare:</strong> { recipe.totalTime }
                    </p>
                    <p>
                      <strong>Dish Type:</strong> { recipe.mealType }
                    </p>
                    <button className="button" onClick={ handleShowRecipeModal }>More Details</button><br />
                    <button onClick={ addBookmark }>Favorite</button>
                  </div>

                  <div className="imageDiv">
                    <img src={ recipe.image } alt={ recipe.label } />
                  </div>
                </div>

              </>
            ) }
        </div>
      ) )
      }
    </div >
  );
}