import { FormEvent, useEffect, useState,useContext } from "react";
import "./Recipe.css"
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";
import { FavoriteContext } from '../Context/favorite-context';
import {Favorite} from "../model/model"
interface Props {
  query: string;
  

}
export function RecipesList({query}: Props) {
  const [recipes, setRecipes] = useState<SearchResponse[]>([]);
  const [calories, setCalories] = useState("");
  const [submittedCalories, setSubmittedCalories] = useState(0);
  const [time, setTime] = useState("");
  const [submittedTime, setSubmittedTime] = useState(0);
  const [title, setTitle] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");
  
  const { addFavorites, favorites } = useContext(FavoriteContext);
  const [label, setLabel] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');
  const [healthLabels, sethealthLabels] = useState([]);
  const [dietLabels, setdietLabels] = useState([]);
  const [ingredientLines, setingredientLines] = useState([]);
  const [totalTime, settotalTime] = useState('');
  const [mealType, setmealType] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [source, setsource] = useState('');
  const [favored, setfavored] = useState(false);



  useEffect(() => {
    fetchAll(query).then((data) => {
      setRecipes(data);
    });
  }, [query]);
  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setSubmittedCalories( parseInt( calories ) );
    setSubmittedTime( parseInt( time ) );
    setSubmittedTitle( title );
  }
  function capitalizeFirstLetter( letter: string ) {
    return letter.charAt( 0 ).toUpperCase() + letter.slice( 1 );
  }
function addBookmark(e:FormEvent){
  e.preventDefault();
  const favorite: Favorite = {
    label: label,
    image: image,
    url: url,
    healthLabels: healthLabels,
    dietLabels: dietLabels,
    ingredientLines: ingredientLines,
    ingredients: ingredients,
    calories: calories,
    totalTime: totalTime,
    mealType: mealType,
    source: source,
    favored: favored,
  };
  addFavorites(favorite);

}

  return (
    <div className="RecipesList">
      <form onSubmit={ handleSubmit }>
        <label>
          Filter Recipes: <br />
          <br />
          Filter By Calories:{ " " }
          <input
            type="text"
            value={ calories }
            onChange={ ( e ) => setCalories( e.target.value ) }
          />
        </label>
        <br />
        <label>
          <br />
          Filter By Time to Cook:{ " " }
          <input
            type="text"
            value={ time }
            onChange={ ( e ) => setTime( e.target.value ) }
          />
        </label>
        <br />
        <label>
          <br />
          Filter By Health Labels <br />
          (Vegan, Vegetarian, Egg-Free, etc.):{ " " }
          <input
            type="text"
            value={ title }
            onChange={ ( e ) => setTitle( e.target.value ) }
          />
        </label>
        <br />
        <button type="submit">Filter Results</button>
      </form>
      <div>
      </div>
      {recipes.map( ( recipe ) => (
        <div key={ recipe.label } className="Recipe">
          {parseInt( recipe.calories ) >= submittedCalories ||
            parseInt( recipe.totalTime ) >= submittedTime ||
            recipe.healthLabels.includes(
              capitalizeFirstLetter( submittedTitle )
            ) || (
              <>
                <div className="Info">
                  <h3>{recipe.label}</h3>
                  <button onClick={addBookmark}>BookMark</button>
                  <p>
                    <strong>Calories:</strong> { recipe.calories }
                  </p>
                  <p>
                    <strong>Time to Prepare:</strong> { recipe.totalTime }
                  </p>
                  <p>
                    <strong>Dish Type:</strong> { recipe.mealType }
                  </p>
                </div>
                <img src={ recipe.image } alt={ recipe.label } />
              </>
            ) }
        </div>
      ) ) }
    </div>
  );
}