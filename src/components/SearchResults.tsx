import React, { useEffect, useState } from "react";
import { Results, Search } from "../model/model";

import { fetchRecipes } from "../service/service";

interface Props {
    searchProps: string;
}

export function SearchResults( { searchProps }: Props ) {
    const [ search, setSearch ] = useState( '' );
    const [ searchResults, setSearchResults ] = useState<Search>();

    useEffect( () => {
        fetchRecipes( searchProps ).then( data => {
            setSearchResults( data );
        } );
    }, [ { searchProps } ] );

    return (
        <div>
            { searchResults.map( ( results, i ) =>
                <Recipe key={ i } results={ results } />
            ) }
        </div>
    );
};