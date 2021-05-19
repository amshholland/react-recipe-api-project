import { Hits, Recipe, Results } from "../model/model";
import { useEffect, useState } from "react";

import { fetchRecipes } from "../service/service";

interface Props {
  results: Results[];
}

export function SearchResults( { results }: Props ) {
  const [ search, setSearch ] = useState<Hits | null>( null );
  const [ searchResults, setSearchResults ] = useState<Results[]>( [] );

  useEffect( () => {
    if ( results ) {
      fetchRecipes( results ).then( data => {
        setSearch( data );
      } );
    } else {
      setSearch( null );
    }
  }, [ { results } ] );

  useEffect( () => {
    fetchRecipes( results ).then( data => {
      setSearchResults( data );
    } );
  }, [ { results } ] );


  return (
    <div>
      {results.map( ( result, i ) => (
        <li key={ i }>
          <p>{ result.label }</p>
          <p>{ result.image }</p>
          <p>{ result.url }</p>
          <p>{ result.calories }</p>
          <p>{ result.time }</p>
        </li>
      ) ) }
    </div>
  );
}

export default SearchResults;