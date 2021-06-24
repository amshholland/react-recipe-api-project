import { ReactNode, createContext, useState } from "react";

import { Favorite } from "../model/model";
import { useParams } from "react-router";

interface FavoriteContextValue {
  favorites: Favorite[];
  isFavorite: ( favorite: Favorite ) => boolean;
  addFavorites: ( favorite: Favorite ) => void;
  deleteFavorites: (url: string ) => void;
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
  {
    label: "Vegan Nachos", image: "https://www.edamam.com/web-img/ed3/ed32750be9cc9b518e464a812c533f59.jpg", url: "http://honestcooking.com/dairy-free-vegan-nachos-recipe/", calories: "2809", totalTime: "15", mealType: "lunch/dinner", source: "Honest Cooking", ingredientLines: [
      "1 bag corn tortilla chips",
      "1½ cups go veggie! vegan mexican cheese shreds",
      "1 cup fresh salsa",
      "½ cup packed baby spinach",
      "1 extra ripe avocado, peeled, pitted and mashed",
      "½ tsp. sea salt",
      "½ tsp. freshly ground pepper",
      "½ tsp. crushed red pepper flakes",
      "1 tbsp. sesame seeds",
      "½ cup finely chopped cilantro, for topping"
    ], healthLabels: [
      "Vegetarian",
      "Pescatarian",
      "Gluten-Free",
      "Wheat-Free",
      "Egg-Free",
      "Peanut-Free",
      "Tree-Nut-Free",
      "Soy-Free",
      "Fish-Free",
      "Shellfish-Free",
      "Pork-Free",
      "Red-Meat-Free",
      "Celery-Free",
      "Mustard-Free",
      "Lupine-Free",
      "Mollusk-Free",
      "Alcohol-Free",
      "Kosher"
    ], ingredients: []
  },
  { label: "Jalapeno Cheese Grits", image: "https://www.edamam.com/web-img/180/18043029508f796463245d4709acc454.jpg", url: "https://www.epicurious.com/recipes/food/views/jalapeno-cheese-grits-356851", calories: "1119", totalTime: "15", mealType: "lunch/dinner", source: "", ingredientLines: [], healthLabels: [], ingredients: [] }
];

export const FavoriteContext = createContext( defaultValue );


export function FavoriteContextProvider( { children }: { children: ReactNode; } ) {
  const [ favorites, setFavorites ] = useState<Favorite[]>( examples );

  // const favoriteIndex = parseInt( useParams<RouteParams>().num );
  // const deleteFavorite = Number( favorites[ favoriteIndex ] );
  // console.log(favoriteIndex);
  function isFavorite( favorite: Favorite ): boolean {
    return favorites.some( eachFavorite => eachFavorite.url === favorite.url );
  }

  //HAD TO USE ANY HERE TO MAKE THIS WORK!!!!!!!!!
  function addFavorites( favorite: Favorite ): number | undefined {

    setFavorites( [ ...favorites, favorite ] );
    return favorites.length;

  }
  function deleteFavorites( url: string ): void {
    
    setFavorites(prevRecipes => prevRecipes.filter(recipe => recipe.url !==url));
  
    console.log(url);
   console.log(favorites.length)

  }
  return (
    <FavoriteContext.Provider value={ { favorites, isFavorite, addFavorites, deleteFavorites } }>
      {children}
    </FavoriteContext.Provider>
  );
}