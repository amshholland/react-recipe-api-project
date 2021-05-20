import { FormEvent, useState } from "react";

export function SearchForm() {
  const [ searchTerm, setSearchTerm ] = useState( "" );

  function handleSubmit( e: FormEvent ) {
    e.preventDefault();

    setSearchTerm( "" );
  }
  return (
    <form className="SearchForm" onSubmit={ handleSubmit }>
      <label>
        <input type="text" value={ searchTerm } onChange={ ( e ) => setSearchTerm( e.target.value ) } />
          Recipe SearchTerm
        </label>
      <button type="submit">Search Foods</button>
    </form>
  );
}
export default SearchForm;
