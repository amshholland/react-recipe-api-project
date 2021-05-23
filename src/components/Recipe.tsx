import './Recipe.css';

import { Router } from 'react-router';
import { SearchResponse } from '../model/model';
import { useState, FormEvent, useContext } from 'react';
import { FavoriteContext } from '../Context/favorite-context';
import { Favorite } from '../model/model';

interface Props {
  recipe: SearchResponse;
}

function Recipe({ recipe }: Props) {
  const { addFavorites,deleteFavorites } = useContext(FavoriteContext);
  const ingredients = recipe.ingredientLines;


  const [isToggled, setToggled] = useState(false);

  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [healthLabels, sethealthLabels] = useState([]);
  const [dietLabels, setdietLabels] = useState([]);
  const [ingredientLines, setingredientLines] = useState([]);
  const [calories, setcalories] = useState('');
  const [totalTime, settotalTime] = useState('');
  const [mealType, setmealType] = useState('');
  const [source, setsource] = useState('');
  const [favored, setfavored] = useState(false);


  function handleSubmit() {
  
  

   
    const favorite: Favorite = {
      label: label,
      image: image,
      url: url,
      healthLabels: healthLabels,
      dietLabels: dietLabels,
      ingredientLines: ingredientLines,
      ingredients: ingredients,
      calories: Number(calories),
      totalTime: totalTime,
      mealType: mealType,
      source: source,
      favored: favored,
    };
  
    addFavorites(recipe);
  }

//   function handleDelete (){
    
//     deleteFavorites(recipe);
//   }
  const toggleTrueFalse = () => setToggled(!isToggled);

  console.log(isToggled);

  // Issue with rendering when going this route
//   if (isToggled===true){
 
//         addFavorites(recipe);
      
    
//   } else if (isToggled===false){
//       deleteFavorites(recipe);
//   }else{
      
//   }


 
  return (
    <div className="Recipe" >
      <div>
        <div className="label">
          <h3>
            {recipe.label} BY {recipe.source}
          </h3>
        </div>
        <div className="details">
          <div>
            <img src={recipe.image} alt={recipe.label} />
          </div>
          {/* <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div> */}

          <p>Calories: {recipe.calories}</p>
          <p>Time to Prepare: {recipe.totalTime}</p>
          <p>Dish Type: {recipe.mealType}</p>

          <p>
            <a href={recipe.url}>Link</a>
          </p>
         
          <button
            onClick={toggleTrueFalse}
            // onChange={(e) => setfavored(e.target.checked)}
            >
        
            </button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
