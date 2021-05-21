import { Favorite } from '../model/model';

interface Props {
  favorite: Favorite;
}

function FavoriteView({ favorite }: Props) {
  const {
    label,
    image,
    url,
    healthLabels,
    dietLabels,
    ingredientLines,
    ingredients,
    calories,
    totalTime,
    mealType,
    favored,
  } = favorite;

  return (
    <div className="favoriteView">
      <p>{label}</p>
      <img src={image} alt={label}/>
      <p><a href={ url }>Link</a></p>
      <p>{calories}</p>
      <p>{dietLabels}</p>
      <p>{totalTime}</p>
      <p>{mealType}</p>
      <p>{healthLabels}</p>
      <p>{ingredientLines}</p>
      <p>{ingredients}</p>
      <p>{favored}</p>
    </div>
  );
}

export default FavoriteView;
