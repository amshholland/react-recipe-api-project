import React, { FormEvent, useState } from "react";
import { SearchResponse } from '../model/model';
import { RecipesList } from "./RecipesList";



export function SearchForm() {
  const [ query, setQuery ] = useState( "" );
  const [ submittedQuery, setSubmittedQuery ] = useState( "" );


  function handleSubmit( e: FormEvent ): void {
    e.preventDefault();
    setSubmittedQuery( query );
  }

  return (
    <div>
      <form className="SearchForm" onSubmit={ handleSubmit }>
        <label>
          Search For Recipes: <br />
          <input
            type="text"
            value={ query }
            onChange={ ( e ) => setQuery( e.target.value ) }
          />
        </label>
        <button type="submit">Search for Recipes</button>
        <br />
      </form>
      <RecipesList query={ submittedQuery }  />
    </div >
  );
}
