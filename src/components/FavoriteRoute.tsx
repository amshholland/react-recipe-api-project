import { FavoriteContext } from "../Context/favorite-context";
import { Link } from "react-router-dom";
import { useContext } from "react";

function FavoriteList() {

  const { favorites } = useContext( FavoriteContext );

  return (
    <ul>
      {favorites.map( ( favorite, i ) => (
        <li key={ i }>
          <Link to={ `/favorites/${ i }` }>{ favorite.label }</Link>{ " " }
        </li>
      ) ) }
    </ul>
  );
}
export default FavoriteList;