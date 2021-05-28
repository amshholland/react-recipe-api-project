import './SearchForm.css';

import React, { FormEvent, useState } from "react";

import { RecipesList } from "./RecipesList";
import { SearchResponse } from '../model/model';

export function SearchForm() {
  const [ query, setQuery ] = useState( "" );
  const [ submittedQuery, setSubmittedQuery ] = useState( "" );


  function handleSubmit( e: FormEvent ): void {
    e.preventDefault();
    setSubmittedQuery( query );
  }

  return (
    <div className="SearchForm" >
      <form onSubmit={ handleSubmit }>
        <label>
          <h3>Search For Recipes:</h3> <br />
          <input
            type="text"
            value={ query }
            onChange={ ( e ) => setQuery( e.target.value ) }
          />
        </label><br />
        <button type="submit" className="searchButton">Search</button>
        <br />
      </form>
      <RecipesList query={ submittedQuery } />
    </div >
  );
}
