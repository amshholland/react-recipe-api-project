import { createContext, ReactNode, useState } from "react";
import { useParams, Redirect } from "react-router";
import {Favorite} from "../model/model";
import Recipe from "../components/Recipe"



interface FavoriteContextValue {
  favorites: Favorite[];
  addFavorites: (favorite:Favorite) => void;
  deleteFavorites: (favorite:Favorite)=> void;
}


const defaultValue: FavoriteContextValue={
  favorites:[],
  addFavorites: ()=>{},
  deleteFavorites: ()=>{},
  
}

interface RouteParams {
  num: string;
}

const examples: Favorite[] =[
  {label: "Vegan Nachos", image:"https://www.edamam.com/web-img/ed3/ed32750be9cc9b518e464a812c533f59.jpg", url:"http://honestcooking.com/dairy-free-vegan-nachos-recipe/",calories:"2809" , totalTime:"15", mealType:"lunch/dinner",favored:true,source:"",ingredientLines:[],healthLabels:[]}
]

export const FavoriteContext = createContext(defaultValue);


 export function FavoriteContextProvider({children}:{children: ReactNode}){
   const [favorites, setFavorites]= useState<Favorite[]>(examples);
   const favoriteIndex = parseInt(useParams<RouteParams>().num);
   const deleteFavorite =Number(favorites[favoriteIndex]);

//HAD TO USE ANY HERE TO MAKE THIS WORK!!!!!!!!!
    function addFavorites(favorite: Favorite):any{
      if(favorite.favored=true){
      setFavorites([...favorites, favorite]);
      return favorites.length;
    }
  }
    function deleteFavorites(favorite:Favorite):any{
      if(favorite.favored=false){
        setFavorites(prevFavorites=>[
          ...prevFavorites.slice(0,deleteFavorite),
          ...prevFavorites.slice(deleteFavorite+1),
         
          
        ]);
       
      }
      
    }
    return (
      <FavoriteContext.Provider value={{favorites,addFavorites,deleteFavorites}}>
      {children}
      </FavoriteContext.Provider>
    )
 }
