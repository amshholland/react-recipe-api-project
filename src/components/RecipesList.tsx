import { FormEvent, useEffect, useState } from "react";

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

  return (
    <div className="RecipesList">
      <form onSubmit={ handleSubmit }>
        <label>
          Filter Recipes: <br />
          <br />
          Filter By Calories:{ " " }
          <input
            type="text"
            value={ calories }
            onChange={ ( e ) => setCalories( e.target.value ) }
          />
        </label>
        <br />
        <label>
          <br />
          Filter By Time to Cook:{ " " }
          <input
            type="text"
            value={ time }
            onChange={ ( e ) => setTime( e.target.value ) }
          />
        </label>
        <br />
        <label>
          <br />
          Filter By Health Labels <br />
          (Vegan, Vegetarian, Egg-Free, etc.):{ " " }
          <input
            type="text"
            value={ title }
            onChange={ ( e ) => setTitle( e.target.value ) }
          />
        </label>
        <br />
        <button type="submit">Filter Results</button>
      </form>
      <div>
      </div>
      {recipes.map( ( recipe ) => (
        <div key={ recipe.label } className="Recipe">
          {parseInt( recipe.calories ) >= submittedCalories ||
            parseInt( recipe.totalTime ) >= submittedTime ||
            recipe.healthLabels.includes(
              capitalizeFirstLetter( submittedTitle )
            ) || (
              <>
                <div className="Info">
                  <h3>{ recipe.label }</h3>
                  <p>
                    <strong>Calories:</strong> { recipe.calories }
                  </p>
                  <p>
                    <strong>Time to Prepare:</strong> { recipe.totalTime }
                  </p>
                  <p>
                    <strong>Dish Type:</strong> { recipe.mealType }
                  </p>
                </div>
                <img src={ recipe.image } alt={ recipe.label } />
              </>
            ) }
        </div>
      ) ) }
    </div>
  );
}