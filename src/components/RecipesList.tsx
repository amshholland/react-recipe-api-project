import "./Recipe.css";

import { Button, Modal } from "react-bootstrap";
import React, { FormEvent, useContext, useEffect, useState } from "react";

import { Favorite } from "../model/model";
import { FavoriteContext } from "../Context/favorite-context";
import { SearchResponse } from "../model/model";
import { fetchAll } from "../service/service";

interface Props {
  query: string;
}

export function RecipesList({ query }: Props) {
  const [recipes, setRecipes] = useState<SearchResponse[]>([]);
  const [calories, setCalories] = useState("");
  const [submittedCalories, setSubmittedCalories] = useState(0);
  const [time, setTime] = useState("");
  const [submittedTime, setSubmittedTime] = useState(0);
  const [title, setTitle] = useState("");
  const [submittedTitle, setSubmittedTitle] = useState("");

  const { addFavorites, favorites } = useContext(FavoriteContext);
  const [label, setLabel] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [healthLabels, sethealthLabels] = useState([]);
  const [dietLabels, setdietLabels] = useState([]);
  const [ingredientLines, setingredientLines] = useState([]);
  const [totalTime, settotalTime] = useState("");
  const [mealType, setmealType] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [source, setsource] = useState("");
  const [favored, setfavored] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const handleCloseFilter = () => setShowFilter(false);
  const handleShowFilter = () => setShowFilter(true);

  const [showRecipe, setShowRecipe] = useState(false);
  const handleCloseRecipe = () => setShowRecipe(false);
  const handleShowRecipe = () => setShowRecipe(true);

  const [selectedRecipe, setSelectedRecipe] =
    useState<SearchResponse | null>(null);

  function handleClickRecipe(recipe: SearchResponse): void {
    setSelectedRecipe(recipe);
  }

  useEffect(() => {
    fetchAll(query).then((data) => {
      setRecipes(data);
    });
  }, [query]);

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    setSubmittedCalories(parseInt(calories));
    setSubmittedTime(parseInt(time));
    setSubmittedTitle(title);
  }
  function capitalizeFirstLetter(letter: string) {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }
  function addBookmark(e: FormEvent) {
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
      <>
        <Button variant="primary" onClick={handleShowFilter}>
          Filter
        </Button>

        <Modal show={showFilter} onHide={handleCloseFilter} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Filter Recipes:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <label>
                <br />
                Calories:{" "}
                <input
                  type="text"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </label>
              <br />
              <label>
                {" "}
                <br /> Time to Cook:{" "}
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
              <br />
              <label>
                <br /> Health Labels: <br /> (Vegan, Vegetarian, Egg-Free,
                etc.):{" "}
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Filter Results</button>
            </form>
          </Modal.Body>
        </Modal>
      </>
      {recipes.map((recipe) => (
        <div key={recipe.label}>
          {parseInt(recipe.calories) <= submittedCalories ||
          parseInt(recipe.totalTime) <= submittedTime ||
          recipe.healthLabels.includes(
            capitalizeFirstLetter(submittedTitle)
          ) ? (
            <>
              <p>
                <h3>{recipe.label}</h3>
              </p>
              <p>
                <strong>Calories:</strong>{" "}
                {parseInt(recipe.calories).toFixed(0)}
              </p>
              <p>
                <strong>Time to Prepare:</strong> {recipe.totalTime}
              </p>
              <p>
                <strong>Dish Type:</strong> {recipe.mealType}
              </p>
              <img src={recipe.image} alt={recipe.label} />
            </>
          ) : (
            query || (
              <>
                <p>
                  <h3>{recipe.label}</h3>
                </p>
                <p>
                  <strong>Calories:</strong>{" "}
                  {parseInt(recipe.calories).toFixed(0)}
                </p>
                <p>
                  <strong>Time to Prepare:</strong> {recipe.totalTime}
                </p>
                <p>
                  <strong>Dish Type:</strong> {recipe.mealType}
                </p>
                <img src={recipe.image} alt={recipe.label} />
              </>
            )
          )}
        </div>
      ))}
    </div>
  );
}
