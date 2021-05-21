import { FormEvent, useState } from "react";
import { RecipesList } from './RecipesList';

export function SearchForm() {
  const [ query, setQuery ] = useState( '' );
  const [ submittedQuery, setSubmittedQuery ] = useState( '' );
  const [ query2, setQuery2 ] = useState( '' );
  const [ submittedQuery2, setSubmittedQuery2 ] = useState( '' );

  function handleSubmit( e: FormEvent ) {
    e.preventDefault();
    setSubmittedQuery( query );
    setSubmittedQuery2( query2 );
  }
  return (
    <div>
      <form className="SearchForm" onSubmit={ handleSubmit }>
        <label>Search For Recipes: <br />
          <input type="text" value={ query } onChange={ ( e ) => setQuery( e.target.value ) } />
        </label>
        <button type="submit">Search Foods</button>
        <label>Filter Recipes: <br />
          <input type="text" value={ query2 } onChange={ ( e ) => setQuery2( e.target.value ) } />
        </label>
        <button type="submit">Search Foods</button>
      </form>
      <RecipesList query={ submittedQuery } query2={ submittedQuery2 }/>
    </div>
  );
}