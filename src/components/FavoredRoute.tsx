import { useContext } from "react";
import { useParams, Redirect } from "react-router";
import { Link } from "react-router-dom";
import {FavoriteContext} from "../Context/favorite-context";
import FavoriteView from "../components/FavoriteView"

interface RouteParams {
  num: string;
}
function FavoredRoute(){
  const favoriteIndex = parseInt(useParams<RouteParams>().num);
  const { favorites } = useContext(FavoriteContext);
  const favorite = favorites[favoriteIndex];
  const prevRecipeIndex = favoriteIndex - 1;
  const nextRecipeIndex = favoriteIndex + 1;
  if (!favorite) {
    return <Redirect to="/favorites" />;
  }
  return (
    <div>
      <FavoriteView favorite={favorite} />
      {prevRecipeIndex >= 0 && (
        <Link to={`/favorites/${prevRecipeIndex}`}>Previous Recipe</Link>
      )}

      {nextRecipeIndex < favorites.length && (
        <Link to={`/favorites/${nextRecipeIndex}`}>Next Recipe</Link>
      )}
    </div>
  );
}



export default FavoredRoute;