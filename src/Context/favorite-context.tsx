import { createContext, ReactNode, useState } from "react";
import {Favorite} from "../model/model";
import Recipe from "../components/Recipe"

interface FavoriteContextValue{
  favorites: Favorite[];
  addFavorites: (favorite:Favorite) => void;
}


const defaultValue: FavoriteContextValue={
  favorites:[],
  addFavorites: ()=>{}
}

const examples: Favorite[] =[
  {label: "Vegan Nachos", image:"https://www.edamam.com/web-img/ed3/ed32750be9cc9b518e464a812c533f59.jpg", url:"http://honestcooking.com/dairy-free-vegan-nachos-recipe/",calories:"2809" , totalTime:"15", mealType:"lunch/dinner",favored:true,source:"",ingredientLines:[],ingredients:[]}
]

export const FavoriteContext = createContext(defaultValue);


 export function FavoriteContextProvider({children}:{children: ReactNode}){
   const [favorites, setFavorites]= useState<Favorite[]>(examples);

    function addFavorites(favorite: Favorite):number {
      setFavorites([...favorites, favorite]);
      return favorites.length;
    }
   

    return (
      <FavoriteContext.Provider value={{favorites,addFavorites}}>
      {children}
      </FavoriteContext.Provider>
    )
 }