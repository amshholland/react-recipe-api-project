import { ReactNode, createContext, useState } from "react";
import { Redirect, useParams } from "react-router";

import { Favorite } from "../model/model";
import Recipe from "../components/Recipe";

interface FavoriteContextValue {
  favorites: Favorite[];
  isFavorite: (favorite: Favorite) => boolean;
  addFavorites: ( favorite: Favorite ) => void;
  deleteFavorites: ( favorite: Favorite ) => void;
}


const defaultValue: FavoriteContextValue = {
  favorites: [],
  isFavorite: () => false,
  addFavorites: () => { },
  deleteFavorites: () => { },

};

interface RouteParams {
  num: string;
}

const examples: Favorite[] = [
  { label: "Vegan Nachos", image: "https://www.edamam.com/web-img/ed3/ed32750be9cc9b518e464a812c533f59.jpg", url: "http://honestcooking.com/dairy-free-vegan-nachos-recipe/", calories: "2809", totalTime: "15", mealType: "lunch/dinner", source: "", ingredientLines: [], healthLabels: [], ingredients: [] },
  { label: "Jalapeno Cheese Grits", image: "https://www.edamam.com/web-img/180/18043029508f796463245d4709acc454.jpg", url: "https://www.epicurious.com/recipes/food/views/jalapeno-cheese-grits-356851", calories: "1119", totalTime: "15", mealType: "lunch/dinner",  source: "", ingredientLines: [], healthLabels: [], ingredients: [] }
];

export const FavoriteContext = createContext( defaultValue );


export function FavoriteContextProvider( { children }: { children: ReactNode; } ) {
  const [ favorites, setFavorites ] = useState<Favorite[]>( examples );

  const favoriteIndex = parseInt( useParams<RouteParams>().num );
  const deleteFavorite = Number( favorites[ favoriteIndex ] );

function isFavorite( favorite: Favorite): boolean {
  return favorites.some(eachFavorite => eachFavorite.url === favorite.url);
}

  //HAD TO USE ANY HERE TO MAKE THIS WORK!!!!!!!!!
  function addFavorites( favorite: Favorite ): number | undefined {

      setFavorites( [ ...favorites, favorite ] );
      return favorites.length;
    
  }
  function deleteFavorites( favorite: Favorite ): any {

      setFavorites( prevFavorites => [
        ...prevFavorites.slice( 0, deleteFavorite ),
        ...prevFavorites.slice( deleteFavorite + 1 ),


      ] );

    

  }
  return (
    <FavoriteContext.Provider value={ { favorites, isFavorite,addFavorites, deleteFavorites } }>
      {children }
    </FavoriteContext.Provider>
  );
}
