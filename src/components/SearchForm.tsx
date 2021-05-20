import { FormEvent, useState } from "react";

import { RecipesList } from './RecipesList';

export function SearchForm() {
  const [ query, setQuery ] = useState( '' );
  const [ submittedQuery, setSubmittedQuery ] = useState( '' );

  function handleSubmit( e: FormEvent ) {
    e.preventDefault();

    setSubmittedQuery( '' );
  }
  return (
    <div>
      <form className="SearchForm" onSubmit={ handleSubmit }>
        <label>Search For Recipes: <br />
          <input type="text" value={ query } onChange={ ( e ) => setQuery( e.target.value ) } />
        </label>
        <button type="submit">Search Foods</button>
      </form>
      <RecipesList query={ submittedQuery } />
    </div>
  );
}